import { MongooseHealthIndicator } from "@nestjs/terminus"
import { Test, TestingModule } from "@nestjs/testing"
import { createMockModule } from "@workspace/utils"

import { DatabaseHealthService } from "./database-health.service"

describe("DatabaseHealthService", () => {
	let service: DatabaseHealthService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [DatabaseHealthService],
			imports: [
				createMockModule([
					{
						provide: MongooseHealthIndicator,
						useValue: {}
					},
					{
						provide: "DatabaseConnection",
						useValue: {}
					}
				])
			]
		}).compile()

		service = module.get<DatabaseHealthService>(DatabaseHealthService)
	})

	it("should be defined", () => {
		expect(service).toBeDefined()
	})
})
