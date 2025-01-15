import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameRoundResolverBase } from "./base/gameRound.resolver.base";
import { GameRound } from "./base/GameRound";
import { GameRoundService } from "./gameRound.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameRound)
export class GameRoundResolver extends GameRoundResolverBase {
  constructor(
    protected readonly service: GameRoundService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
