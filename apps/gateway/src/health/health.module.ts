import { Module } from "@nestjs/common"
import { ConfigurationModule } from "@workspace/configuration"
import { HealthProxyService } from "@workspace/proxy-clients"

import { HealthController } from "./health.controller"

@Module({
	imports: [ConfigurationModule],
	controllers: [HealthController],
	providers: [HealthProxyService]
})
export class HealthModule {}
