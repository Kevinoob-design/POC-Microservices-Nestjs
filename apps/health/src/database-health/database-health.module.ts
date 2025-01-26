import { Module } from "@nestjs/common"
import { TerminusModule } from "@nestjs/terminus"
import { ConfigurationModule } from "@workspace/configuration"
import { DatabaseModule } from "@workspace/database"

import { DatabaseHealthController } from "./database-health.controller"
import { DatabaseHealthService } from "./database-health.service"

@Module({
	imports: [DatabaseModule, ConfigurationModule, TerminusModule],
	controllers: [ConfigurationModule, DatabaseHealthController],
	providers: [DatabaseHealthService]
})
export class DatabaseHealthModule {}
