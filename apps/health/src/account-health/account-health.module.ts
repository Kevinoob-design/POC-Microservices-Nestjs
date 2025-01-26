import { Module } from "@nestjs/common"
import { TerminusModule } from "@nestjs/terminus"
import { ConfigurationModule } from "@workspace/configuration"

import { AccountHealthController } from "./account-health.controller"
import { AccountHealthService } from "./account-health.service"

@Module({
	imports: [ConfigurationModule, TerminusModule],
	controllers: [AccountHealthController],
	providers: [AccountHealthService]
})
export class AccountHealthModule {}
