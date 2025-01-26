import { Controller } from "@nestjs/common"
import { MessagePattern } from "@nestjs/microservices"
import { HealthCheck, HealthCheckService } from "@nestjs/terminus"
import { HealthRabbitMqMsgs } from "@workspace/types"

import { AuthHealthService } from "./auth-health.service"

@Controller("auth-health")
export class AuthHealthController {
	constructor(
		private readonly healthCheckService: HealthCheckService,
		private readonly authHealthService: AuthHealthService
	) {}

	@HealthCheck()
	@MessagePattern(HealthRabbitMqMsgs.GET_AUTH_HEALTH_MSG)
	async getAuthHealth() {
		try {
			return await this.healthCheckService.check([
				this.authHealthService.authLoginCheck,
				this.authHealthService.authCanActivateCheck
			])
		} catch (error) {
			return error
		}
	}
}
