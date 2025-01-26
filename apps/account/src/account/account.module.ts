import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { Role, roleSchema } from "@workspace/types"

import { AccountController } from "./account.controller"
import { AccountService } from "./account.service"

@Module({
	imports: [MongooseModule.forFeature([{ name: Role.name, schema: roleSchema }])],
	controllers: [AccountController],
	providers: [AccountService]
})
export class AccountModule {}
