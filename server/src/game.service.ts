import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { CreateGuessDto } from "./create-guess.dto";

@Injectable()
export class GameService {
	constructor(private prisma: PrismaService) { }

	async validate(guess: CreateGuessDto) {
		const target = await this.prisma.character.findUnique({
			where: { name: guess.characterId },
		});
		if (!target) return { found: false };

		const xDiff = Math.abs(guess.x - target.x);
		const yDiff = Math.abs(guess.y - target.y);

		if (xDiff <= target.radius && yDiff <= target.radius) {
			return { found: true };
		}

		return { found: false };
	}

	async start() {
		const session = await this.prisma.gameSession.create({});
		return { sessionId: session.id };
	}

	async end(sessionId: number) {
		const session = await this.prisma.gameSession.findUnique({
			where: { id: sessionId },
		});

		if (!session) {
			throw new Error("Sessão não encontrada");
		}

		const endTime = new Date();
		const durationInSeconds =
			(endTime.getTime() - session.startTime.getTime()) / 1000;

		const updatedSession = await this.prisma.gameSession.update({
			where: { id: sessionId },
			data: {
				endTime: endTime,
				score: durationInSeconds,
			},
		});

		return {
			sucess: true,
			message: "Jogo finalizado com sucesso!",
			finalTime: durationInSeconds,
		};
	}
}
