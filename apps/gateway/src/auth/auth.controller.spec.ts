import { Test, TestingModule } from "@nestjs/testing"
import { AuthProxyService } from "@workspace/proxy-clients"
import { createMockModule } from "@workspace/utils"

import { AuthController } from "./auth.controller"

describe("AuthController", () => {
	let controller: AuthController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [AuthController],
			imports: [
				createMockModule([
					{
						provide: AuthProxyService,
						useValue: { createClientProxy: jest.fn() }
					}
				])
			]
		}).compile()

		controller = module.get<AuthController>(AuthController)
	})

	it("should be defined", () => {
		expect(controller).toBeDefined()
	})
})
