import { Test, TestingModule } from "@nestjs/testing"
import { HealthProxyService } from "@workspace/proxy-clients"
import { createMockModule } from "@workspace/utils"

import { HealthController } from "./health.controller"

describe("HealthController", () => {
	let controller: HealthController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [HealthController],
			imports: [
				createMockModule([
					{
						provide: HealthProxyService,
						useValue: { createClientProxy: jest.fn() }
					}
				])
			]
		}).compile()

		controller = module.get<HealthController>(HealthController)
	})

	it("should be defined", () => {
		expect(controller).toBeDefined()
	})
})
