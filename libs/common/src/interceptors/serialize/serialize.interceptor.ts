import { CallHandler, ExecutionContext, Injectable, NestInterceptor, UseInterceptors } from "@nestjs/common"
import { ClassConstructor } from "@workspace/types"
import { plainToInstance } from "class-transformer"
import { map, Observable } from "rxjs"

export function serialize<AnyType>(dto: ClassConstructor<AnyType>) {
	return UseInterceptors(new SerializeInterceptor(dto))
}

@Injectable()
export class SerializeInterceptor<AnyType> implements NestInterceptor {
	constructor(private dto: ClassConstructor<AnyType>) {}

	intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
		return next
			.handle()
			.pipe(map((data: unknown) => plainToInstance(this.dto, data, { excludeExtraneousValues: true })))
	}
}
