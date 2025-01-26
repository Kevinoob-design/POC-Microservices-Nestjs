import { HttpException } from "@nestjs/common"
import { GlobalHttpException } from "@workspace/types"

import { ExceptionConverter } from "./ExceptionConverter"

export class HttpExceptionConverter implements ExceptionConverter<HttpException> {
	convert(exception: GlobalHttpException): HttpException {
		return new HttpException(exception, exception?.status || 500)
	}
}
