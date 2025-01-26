import { Controller } from "@nestjs/common"
import { MessagePattern } from "@nestjs/microservices"
import { HealthCheck, HealthCheckService } from "@nestjs/terminus"
import { HealthRabbitMqMsgs } from "@workspace/types"

import { DatabaseHealthService } from "./database-health.service"

@Controller("database-health")
export class DatabaseHealthController {
	constructor(
		private readonly healthCheckService: HealthCheckService,
		private readonly databaseHealthService: DatabaseHealthService
	) {}

	@HealthCheck()
	@MessagePattern(HealthRabbitMqMsgs.GET_DATABASE_HEALTH_MSG)
	async getAccountHealth() {
		try {
			return await this.healthCheckService.check([this.databaseHealthService.databaseCheck])
		} catch (error) {
			return error
		}
	}
}
