import { Module } from "@nestjs/common"
import { ConfigurationModule } from "@workspace/configuration"

import { AuthController } from "../auth/auth.controller"
import { AuthService } from "../auth/auth.service"

@Module({
	imports: [ConfigurationModule],
	controllers: [AuthController],
	providers: [AuthService]
})
export class AppModule {}
