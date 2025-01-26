import { Injectable } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { Environment, EnvironmentString } from "@workspace/types"

@Injectable()
export class EnvironmentService {
	constructor(private readonly configService: ConfigService) {}

	getRuntimeEnvironment(): EnvironmentString {
		return this.configService.get<EnvironmentString>(Environment.NODE_ENV)
	}

	getRabbitMqUrls(): string[] {
		return [this.configService.get<string>(Environment.AMQP_URL)]
	}

	getDatabaseConnectionString(): string {
		return this.configService.get<string>(Environment.DB_URL)
	}

	getAppHost(): string {
		return this.configService.get<string>(Environment.HOST) || "http://localhost"
	}

	getAppPort(): number {
		return this.configService.get<number>(Environment.PORT) || 3000
	}

	getGlobalPrefix(): string {
		return this.configService.get<string>(Environment.GLOBAL_PREFIX) || "api/v2"
	}
}
