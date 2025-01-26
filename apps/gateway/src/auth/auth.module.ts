import { Module } from "@nestjs/common"
import { ConfigurationModule } from "@workspace/configuration"
import { AuthProxyService } from "@workspace/proxy-clients"

import { AuthController } from "./auth.controller"

@Module({
	imports: [ConfigurationModule],
	controllers: [AuthController],
	providers: [AuthProxyService]
})
export class AuthModule {}
