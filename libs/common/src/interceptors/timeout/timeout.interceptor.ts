import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common"
import { Observable, timeout } from "rxjs"

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
		return next.handle().pipe(timeout(120000))
	}
}
