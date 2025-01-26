import { INestApplication, Logger } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { HttpExceptionsFilter, TimeoutInterceptor } from "@workspace/common"
import { EnvironmentService } from "@workspace/configuration"

import { AppModule } from "./app/app.module"

async function bootstrap() {
	const appContext = await NestFactory.createApplicationContext(AppModule)
	const app = await NestFactory.create(AppModule)
	const environmentService = appContext.get(EnvironmentService)
	const globalPrefix = environmentService.getGlobalPrefix()

	setGlobals(app, globalPrefix)
	configSwagger(app, globalPrefix)

	const host = environmentService.getAppHost()
	const port = environmentService.getAppPort()

	await app.listen(port)
	Logger.log(`🚀 Application is running on: ${host}:${port}/${globalPrefix}`)
}

function setGlobals(app: INestApplication, globalPrefix: string) {
	app.setGlobalPrefix(globalPrefix)
	app.useGlobalFilters(new HttpExceptionsFilter())
	app.useGlobalInterceptors(new TimeoutInterceptor())
}

function configSwagger(app: INestApplication, globalPrefix: string) {
	const swaggerOptions = new DocumentBuilder()
		.setTitle("MC V2 API")
		.setDescription("MC V2 API")
		.setVersion("2.0.0")
		.addBearerAuth()
		.build()

	const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions)

	SwaggerModule.setup(`${globalPrefix}/docs`, app, swaggerDocument, {
		swaggerOptions: {
			filter: true
		}
	})
}

bootstrap()
