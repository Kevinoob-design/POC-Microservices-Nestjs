import { HealthCheckService } from "@nestjs/terminus"
import { Test, TestingModule } from "@nestjs/testing"
import { createMockModule } from "@workspace/utils"

import { AuthHealthController } from "./auth-health.controller"
import { AuthHealthService } from "./auth-health.service"

describe("AuthHealthController", () => {
	let controller: AuthHealthController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [AuthHealthController],
			imports: [
				createMockModule([
					{
						provide: HealthCheckService,
						useValue: {}
					},
					{
						provide: AuthHealthService,
						useValue: {}
					}
				])
			]
		}).compile()

		controller = module.get<AuthHealthController>(AuthHealthController)
	})

	it("should be defined", () => {
		expect(controller).toBeDefined()
	})
})
