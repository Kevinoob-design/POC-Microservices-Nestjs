import { Module } from "@nestjs/common"

import { AccountHealthModule } from "../account-health/account-health.module"
import { AuthHealthModule } from "../auth-health/auth-health.module"
import { DatabaseHealthModule } from "../database-health/database-health.module"

@Module({
	imports: [DatabaseHealthModule, AuthHealthModule, AccountHealthModule],
	controllers: [],
	providers: []
})
export class AppModule {}
