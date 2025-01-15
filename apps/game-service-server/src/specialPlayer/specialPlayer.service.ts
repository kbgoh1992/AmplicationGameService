import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SpecialPlayerServiceBase } from "./base/specialPlayer.service.base";

@Injectable()
export class SpecialPlayerService extends SpecialPlayerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
