import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { ConfigurationModule, EnvironmentService } from "@workspace/configuration"

@Module({
	imports: [
		MongooseModule.forRootAsync({
			imports: [ConfigurationModule],
			inject: [EnvironmentService],
			useFactory: (environmentService: EnvironmentService) => {
				return {
					uri: environmentService.getDatabaseConnectionString()
				}
			}
		})
	]
})
export class DatabaseModule {}
