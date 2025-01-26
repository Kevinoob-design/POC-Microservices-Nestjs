import { Test, TestingModule } from "@nestjs/testing"
import { AccountProxyService, AuthProxyService } from "@workspace/proxy-clients"
import { createMockModule } from "@workspace/utils"

import { AccountController } from "./account.controller"

describe("AccountController", () => {
	let controller: AccountController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [AccountController],
			imports: [
				createMockModule([
					{
						provide: AccountProxyService,
						useValue: { createClientProxy: jest.fn() }
					},
					{
						provide: AuthProxyService,
						useValue: { createClientProxy: jest.fn() }
					}
				])
			]
		}).compile()

		controller = module.get<AccountController>(AccountController)
	})

	it("should be defined", () => {
		expect(controller).toBeDefined()
	})
})
