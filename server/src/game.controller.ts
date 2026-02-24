import { Controller, Post, Body, Get } from "@nestjs/common";
import { GameService } from "./game.service";
import { CreateGuessDto } from "./create-guess.dto";

@Controller('game')
export class AppController {
  constructor(private readonly gameService: GameService) { }

  @Post('validate')
  validateGuess(@Body() guessDto: CreateGuessDto) {
    return this.gameService.validate(guessDto);
  }

  @Post('start')
  async startGame() {
    return this.gameService.start();
  }

  @Post('end')
  async endGame(@Body('sessionId') sessionId: number) {
    return this.gameService.end(sessionId);
  }

  @Get('leaderboard')
  async getLeaderboard() {
    return this.gameService.getLeaderboard();
  }
}
