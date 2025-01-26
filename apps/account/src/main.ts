import { Logger } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { RpcExceptionsFilter, TimeoutInterceptor } from "@workspace/common"
import { ClientProxyConfigService } from "@workspace/configuration"
import { AccountRabbitMqQueues } from "@workspace/types"

import { AppModule } from "./app/app.module"

async function bootstrap() {
	const appContext = await NestFactory.createApplicationContext(AppModule)
	const clientProxyConfigService = appContext.get(ClientProxyConfigService)

	const app = await NestFactory.createMicroservice(
		AppModule,
		clientProxyConfigService.getMicroserviceOptions(AccountRabbitMqQueues.ACCOUNT_QUEUE)
	)

	app.useGlobalFilters(new RpcExceptionsFilter())
	app.useGlobalInterceptors(new TimeoutInterceptor())

	await app.listen()
	Logger.log(`🚀 Application Account is running on`)
}

bootstrap()
