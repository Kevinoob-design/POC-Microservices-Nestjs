import { Injectable } from "@nestjs/common"
import { MicroserviceHealthIndicator } from "@nestjs/terminus"
import { ClientProxyConfigService } from "@workspace/configuration"
import { AccountRabbitMqMsgs, AccountRabbitMqQueues } from "@workspace/types"

@Injectable()
export class AccountHealthService {
	constructor(
		private readonly microserviceCheck: MicroserviceHealthIndicator,
		private readonly clientProxyConfigService: ClientProxyConfigService
	) {}

	accountGetCheck = () =>
		this.microserviceCheck.pingCheck(
			"account-get-microservice",
			this.clientProxyConfigService.getRmqCheckConfigOptions(
				AccountRabbitMqQueues.ACCOUNT_QUEUE,
				AccountRabbitMqMsgs.GET_ACCOUNT_MSG
			)
		)
}
