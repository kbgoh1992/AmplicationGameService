import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SpecialPlayerService } from "./specialPlayer.service";
import { SpecialPlayerControllerBase } from "./base/specialPlayer.controller.base";

@swagger.ApiTags("specialPlayers")
@common.Controller("specialPlayers")
export class SpecialPlayerController extends SpecialPlayerControllerBase {
  constructor(
    protected readonly service: SpecialPlayerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
