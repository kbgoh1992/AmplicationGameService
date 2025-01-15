import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameRoundService } from "./gameRound.service";
import { GameRoundControllerBase } from "./base/gameRound.controller.base";

@swagger.ApiTags("gameRounds")
@common.Controller("gameRounds")
export class GameRoundController extends GameRoundControllerBase {
  constructor(
    protected readonly service: GameRoundService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
