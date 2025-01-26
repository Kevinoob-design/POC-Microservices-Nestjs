import { Module, ValidationPipe } from "@nestjs/common"
import { APP_PIPE } from "@nestjs/core"
import { DatabaseModule } from "@workspace/database"

import { AccountModule } from "../account/account.module"

@Module({
	imports: [DatabaseModule, AccountModule],
	providers: [
		{
			provide: APP_PIPE,
			useValue: new ValidationPipe({ whitelist: true })
		}
	]
})
export class AppModule {}
