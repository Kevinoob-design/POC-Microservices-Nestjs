import { Controller } from "@nestjs/common"
import { MessagePattern } from "@nestjs/microservices"
import { HealthCheck, HealthCheckService } from "@nestjs/terminus"
import { HealthRabbitMqMsgs } from "@workspace/types"

import { AccountHealthService } from "./account-health.service"

@Controller("account-health")
export class AccountHealthController {
	constructor(
		private readonly healthCheckService: HealthCheckService,
		private readonly accountHealthService: AccountHealthService
	) {}

	@HealthCheck()
	@MessagePattern(HealthRabbitMqMsgs.GET_ACCOUNT_HEALTH_MSG)
	async getAccountHealth() {
		try {
			return await this.healthCheckService.check([this.accountHealthService.accountGetCheck])
		} catch (error) {
			return error
		}
	}
}
