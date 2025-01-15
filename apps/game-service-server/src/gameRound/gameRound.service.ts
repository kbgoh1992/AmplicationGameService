import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameRoundServiceBase } from "./base/gameRound.service.base";

@Injectable()
export class GameRoundService extends GameRoundServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
