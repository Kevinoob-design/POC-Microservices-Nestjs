import { Injectable } from "@nestjs/common"
import { ClientProxy, ClientProxyFactory } from "@nestjs/microservices"
import { ClientProxyConfigService } from "@workspace/configuration"
import { AuthRabbitMqQueues } from "@workspace/types"

@Injectable()
export class AuthProxyService {
	constructor(private readonly clientProxyConfigService: ClientProxyConfigService) {}

	createClientProxy(): ClientProxy {
		return ClientProxyFactory.create(this.clientProxyConfigService.getRmqConfigOptions(AuthRabbitMqQueues.AUTH_QUEUE))
	}
}
