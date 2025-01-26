import { Catch, RpcExceptionFilter } from "@nestjs/common"
import { RpcException } from "@nestjs/microservices"
import { throwError } from "rxjs"

@Catch()
export class RpcExceptionsFilter implements RpcExceptionFilter<RpcException> {
	catch(exception: Error) {
		return throwError(() => exception)
	}
}
