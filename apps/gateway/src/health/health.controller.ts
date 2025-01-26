import { Controller, Get } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { HealthProxyService } from "@workspace/proxy-clients"
import { HealthRabbitMqMsgs } from "@workspace/types"

@ApiTags("health")
@Controller("health")
export class HealthController {
	constructor(private readonly ClientProxy: HealthProxyService) {}

	private readonly clientProxy = this.ClientProxy.createClientProxy()

	@Get("/database")
	getDatabaseHealth() {
		return this.clientProxy.send(HealthRabbitMqMsgs.GET_DATABASE_HEALTH_MSG, "")
	}

	@Get("/auth")
	getAuthHealth() {
		return this.clientProxy.send(HealthRabbitMqMsgs.GET_AUTH_HEALTH_MSG, "")
	}

	@Get("/account")
	getAccountHealth() {
		return this.clientProxy.send(HealthRabbitMqMsgs.GET_ACCOUNT_HEALTH_MSG, "")
	}
}
