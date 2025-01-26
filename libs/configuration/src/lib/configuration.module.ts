import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"

import { ClientProxyConfigService } from "../client-proxy-config/client-proxy-config.service"
import { EnvironmentService } from "../environment/environment.service"

@Module({
	imports: [ConfigModule.forRoot({ envFilePath: "/.env", isGlobal: true })],
	providers: [EnvironmentService, ClientProxyConfigService],
	exports: [EnvironmentService, ClientProxyConfigService]
})
export class ConfigurationModule {}
