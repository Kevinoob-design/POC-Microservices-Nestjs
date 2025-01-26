import { Module } from "@nestjs/common"
import { ConfigurationModule } from "@workspace/configuration"
import { AccountProxyService, AuthProxyService } from "@workspace/proxy-clients"

import { AccountController } from "./account.controller"

@Module({
	imports: [ConfigurationModule],
	controllers: [AccountController],
	providers: [AuthProxyService, AccountProxyService]
})
export class AccountModule {}
