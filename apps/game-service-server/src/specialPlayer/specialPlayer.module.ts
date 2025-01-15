import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SpecialPlayerModuleBase } from "./base/specialPlayer.module.base";
import { SpecialPlayerService } from "./specialPlayer.service";
import { SpecialPlayerController } from "./specialPlayer.controller";
import { SpecialPlayerResolver } from "./specialPlayer.resolver";

@Module({
  imports: [SpecialPlayerModuleBase, forwardRef(() => AuthModule)],
  controllers: [SpecialPlayerController],
  providers: [SpecialPlayerService, SpecialPlayerResolver],
  exports: [SpecialPlayerService],
})
export class SpecialPlayerModule {}
