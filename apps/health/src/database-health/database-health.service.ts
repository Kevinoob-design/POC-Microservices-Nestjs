import { Injectable } from "@nestjs/common"
import { InjectConnection } from "@nestjs/mongoose"
import { MongooseHealthIndicator } from "@nestjs/terminus"
import { Connection } from "mongoose"

@Injectable()
export class DatabaseHealthService {
	constructor(
		private readonly mongooseHealthIndicator: MongooseHealthIndicator,
		@InjectConnection() private readonly connection: Connection
	) {}

	databaseCheck = () =>
		this.mongooseHealthIndicator.pingCheck("mongo-database", {
			connection: this.connection
		})
}
