import { Injectable } from "@nestjs/common"
import { ClientProxy, ClientProxyFactory } from "@nestjs/microservices"
import { ClientProxyConfigService } from "@workspace/configuration"
import { AccountRabbitMqQueues } from "@workspace/types"

@Injectable()
export class AccountProxyService {
	constructor(private readonly clientProxyConfigService: ClientProxyConfigService) {}

	createClientProxy(): ClientProxy {
		return ClientProxyFactory.create(
			this.clientProxyConfigService.getRmqConfigOptions(AccountRabbitMqQueues.ACCOUNT_QUEUE)
		)
	}
}
