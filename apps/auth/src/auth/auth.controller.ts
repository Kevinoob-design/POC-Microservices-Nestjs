import { Controller } from "@nestjs/common"
import { MessagePattern, Payload } from "@nestjs/microservices"
import { AuthRabbitMqMsgs } from "@workspace/types"

import { AuthService } from "./auth.service"

@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@MessagePattern(AuthRabbitMqMsgs.CAN_ACTIVATE_MSG)
	canActivate(@Payload() headers: any) {
		return this.authService.canActivate(headers)
	}

	@MessagePattern(AuthRabbitMqMsgs.LOGIN_MSG)
	login() {
		return this.authService.login()
	}
}
