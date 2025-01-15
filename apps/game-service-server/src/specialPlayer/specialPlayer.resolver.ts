import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SpecialPlayerResolverBase } from "./base/specialPlayer.resolver.base";
import { SpecialPlayer } from "./base/SpecialPlayer";
import { SpecialPlayerService } from "./specialPlayer.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SpecialPlayer)
export class SpecialPlayerResolver extends SpecialPlayerResolverBase {
  constructor(
    protected readonly service: SpecialPlayerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
