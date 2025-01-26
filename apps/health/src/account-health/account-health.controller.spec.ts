import { HealthCheckService } from "@nestjs/terminus"
import { Test, TestingModule } from "@nestjs/testing"
import { createMockModule } from "@workspace/utils"

import { AccountHealthController } from "./account-health.controller"
import { AccountHealthService } from "./account-health.service"

describe("AccountHealthController", () => {
	let controller: AccountHealthController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [AccountHealthController],
			imports: [
				createMockModule([
					{
						provide: HealthCheckService,
						useValue: { createClientProxy: jest.fn() }
					},
					{
						provide: AccountHealthService,
						useValue: { createClientProxy: jest.fn() }
					}
				])
			]
		}).compile()

		controller = module.get<AccountHealthController>(AccountHealthController)
	})

	it("should be defined", () => {
		expect(controller).toBeDefined()
	})
})
