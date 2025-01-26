import { Module } from "@nestjs/common"
import { TerminusModule } from "@nestjs/terminus"
import { ConfigurationModule } from "@workspace/configuration"

import { AuthHealthController } from "./auth-health.controller"
import { AuthHealthService } from "./auth-health.service"

@Module({
	imports: [ConfigurationModule, TerminusModule],
	controllers: [AuthHealthController],
	providers: [AuthHealthService]
})
export class AuthHealthModule {}
