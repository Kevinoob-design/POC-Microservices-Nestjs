import { Injectable } from "@nestjs/common"
import { MicroserviceHealthIndicator } from "@nestjs/terminus"
import { ClientProxyConfigService } from "@workspace/configuration"
import { AuthRabbitMqMsgs, AuthRabbitMqQueues } from "@workspace/types"

@Injectable()
export class AuthHealthService {
	constructor(
		private readonly microserviceCheck: MicroserviceHealthIndicator,
		private readonly clientProxyConfigService: ClientProxyConfigService
	) {}

	authCanActivateCheck = () =>
		this.microserviceCheck.pingCheck(
			"auth-can-activate-microservice",
			this.clientProxyConfigService.getRmqCheckConfigOptions(
				AuthRabbitMqQueues.AUTH_QUEUE,
				AuthRabbitMqMsgs.CAN_ACTIVATE_MSG
			)
		)

	authLoginCheck = () =>
		this.microserviceCheck.pingCheck(
			"auth-login-microservice",
			this.clientProxyConfigService.getRmqCheckConfigOptions(AuthRabbitMqQueues.AUTH_QUEUE, AuthRabbitMqMsgs.LOGIN_MSG)
		)
}
