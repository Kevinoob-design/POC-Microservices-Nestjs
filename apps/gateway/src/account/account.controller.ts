import { Controller, Get, Param, UseGuards } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { AuthGuard, serialize } from "@workspace/common"
import { AccountProxyService } from "@workspace/proxy-clients"
import { AccountRabbitMqMsgs, GetAccountParamsDto, Role, AccountExposeDto } from "@workspace/types"
import { Observable } from "rxjs"

@ApiTags("account")
@UseGuards(AuthGuard)
@serialize(AccountExposeDto)
@Controller("account")
export class AccountController {
	constructor(private readonly ClientProxy: AccountProxyService) {}

	private readonly clientProxy = this.ClientProxy.createClientProxy()

	@Get(":id")
	getAccount(@Param() params: GetAccountParamsDto): Observable<Role> {
		return this.clientProxy.send(AccountRabbitMqMsgs.GET_ACCOUNT_MSG, params)
	}
}
