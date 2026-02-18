import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { CreateGuessDto } from "./create-guess.dto";

@Injectable()
export class GameService {
	constructor(private prisma: PrismaService) {}

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
}
