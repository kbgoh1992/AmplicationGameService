import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameRoundModuleBase } from "./base/gameRound.module.base";
import { GameRoundService } from "./gameRound.service";
import { GameRoundController } from "./gameRound.controller";
import { GameRoundResolver } from "./gameRound.resolver";

@Module({
  imports: [GameRoundModuleBase, forwardRef(() => AuthModule)],
  controllers: [GameRoundController],
  providers: [GameRoundService, GameRoundResolver],
  exports: [GameRoundService],
})
export class GameRoundModule {}
