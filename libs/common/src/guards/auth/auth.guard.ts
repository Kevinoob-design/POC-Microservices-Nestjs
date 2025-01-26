import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common"
import { AuthProxyService } from "@workspace/proxy-clients"
import { AuthRabbitMqMsgs } from "@workspace/types"
import { Observable } from "rxjs"

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private readonly ClientProxy: AuthProxyService) {}

	private readonly clientProxy = this.ClientProxy.createClientProxy()

	canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
		const request = context.switchToHttp().getRequest<Request>()

		return this.clientProxy.send(AuthRabbitMqMsgs.CAN_ACTIVATE_MSG, request.headers)
	}
}
