import { Module, ValidationPipe } from "@nestjs/common"
import { APP_PIPE } from "@nestjs/core"

import { AccountModule } from "../account/account.module"
import { AuthModule } from "../auth/auth.module"
import { HealthModule } from "../health/health.module"

@Module({
	imports: [HealthModule, AuthModule, AccountModule],
	providers: [
		{
			provide: APP_PIPE,
			useValue: new ValidationPipe({ whitelist: true })
		}
	]
})
export class AppModule {}
