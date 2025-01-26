import { Controller, Get } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { AuthProxyService } from "@workspace/proxy-clients"
import { AuthRabbitMqMsgs } from "@workspace/types"

@ApiTags("auth")
@Controller("auth")
export class AuthController {
	constructor(private readonly ClientProxy: AuthProxyService) {}

	private readonly clientProxy = this.ClientProxy.createClientProxy()

	@Get()
	login() {
		return this.clientProxy.send(AuthRabbitMqMsgs.LOGIN_MSG, "")
	}
}
