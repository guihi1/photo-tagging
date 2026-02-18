import { Module } from "@nestjs/common";
import { AppController } from "./game.controller";
import { GameService } from "./game.service";
import { PrismaService } from "./prisma.service";

@Module({
	imports: [],
	controllers: [AppController],
	providers: [GameService, PrismaService],
})
export class AppModule {}
