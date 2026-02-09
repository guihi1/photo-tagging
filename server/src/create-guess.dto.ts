import { IsNumber, IsString } from "class-validator";

export class CreateGuessDto {
	@IsString()
	characterId: string;

	@IsNumber()
	x: number;

	@IsNumber()
	y: number;
}
