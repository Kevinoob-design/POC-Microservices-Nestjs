import { Controller } from "@nestjs/common"
import { MessagePattern, Payload } from "@nestjs/microservices"
import { AccountRabbitMqMsgs, GetAccountParamsDto, Role } from "@workspace/types"

import { AccountService } from "./account.service"

@Controller("account")
export class AccountController {
	constructor(private readonly accountService: AccountService) {}

	@MessagePattern(AccountRabbitMqMsgs.GET_ACCOUNT_MSG)
	findOneById(@Payload() params: GetAccountParamsDto): Promise<Role> {
		return this.accountService.findOneById(params.id)
	}
}
