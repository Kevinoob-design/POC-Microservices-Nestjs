import { HealthCheckService } from "@nestjs/terminus"
import { Test, TestingModule } from "@nestjs/testing"
import { createMockModule } from "@workspace/utils"

import { DatabaseHealthController } from "./database-health.controller"
import { DatabaseHealthService } from "./database-health.service"

describe("DatabaseHealthController", () => {
	let controller: DatabaseHealthController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [DatabaseHealthController],
			imports: [
				createMockModule([
					{
						provide: HealthCheckService,
						useValue: {}
					},
					{
						provide: DatabaseHealthService,
						useValue: {}
					}
				])
			]
		}).compile()

		controller = module.get<DatabaseHealthController>(DatabaseHealthController)
	})

	it("should be defined", () => {
		expect(controller).toBeDefined()
	})
})
