import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from "@nestjs/common"

@Catch()
export class HttpExceptionsFilter implements ExceptionFilter {
	private readonly logger = new Logger(HttpExceptionsFilter.name)

	catch(exception: any, host: ArgumentsHost) {
		const context = host.switchToHttp()
		const response = context.getResponse()
		const request = context.getRequest()

		const status = exception instanceof HttpException ? exception.getStatus() : exception?.status || 500

		const message =
			exception instanceof HttpException
				? exception.getResponse()
				: exception?.response || exception?.message || `${exception}`

		this.logger.error(`Status: ${status} Error ${JSON.stringify(message)}`)

		response.status(status).json({
			timeStamp: new Date().toISOString(),
			path: request.url,
			error: message
		})
	}
}
