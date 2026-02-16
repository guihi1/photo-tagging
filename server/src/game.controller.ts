import { Controller, Post, Body } from "@nestjs/common";
import { GameService } from "./game.service";
import { CreateGuessDto } from "./create-guess.dto";

@Controller('game')
export class AppController {
  constructor(private readonly gameService: GameService) { }

  @Post('validate')
  validateGuess(@Body() guessDto: CreateGuessDto) {
    return this.gameService.validate(guessDto);
  }
}
