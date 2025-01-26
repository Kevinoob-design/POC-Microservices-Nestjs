import { Injectable } from "@nestjs/common"
import { ClientProxy, ClientProxyFactory } from "@nestjs/microservices"
import { ClientProxyConfigService } from "@workspace/configuration"
import { HealthRabbitMqQueues } from "@workspace/types"

@Injectable()
export class HealthProxyService {
	constructor(private readonly clientProxyConfigService: ClientProxyConfigService) {}

	createClientProxy(): ClientProxy {
		return ClientProxyFactory.create(
			this.clientProxyConfigService.getRmqConfigOptions(HealthRabbitMqQueues.HEALTH_QUEUE)
		)
	}
}
