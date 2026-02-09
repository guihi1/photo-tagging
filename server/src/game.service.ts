import { Injectable } from "@nestjs/common";

@Injectable()
export class GameService {
	private readonly characters = {
		waldo: { x: 49, y: 42, radius: 5 },
	};

	validate(guess: any) {
		const target = this.characters[guess.characterId];
		if (!target) return { found: false };

		const xDiff = Math.abs(guess.x - target.x);
		const yDiff = Math.abs(guess.y - target.y);

		if (xDiff <= target.radius && yDiff <= target.radius) {
			return { found: true, message: "You found him!" };
		}

		return { found: false };
	}
}
