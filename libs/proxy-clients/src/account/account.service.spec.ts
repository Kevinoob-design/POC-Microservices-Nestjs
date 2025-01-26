import { Test, TestingModule } from "@nestjs/testing"
import { ClientProxyConfigService } from "@workspace/configuration"
import { createMockModule } from "@workspace/utils"

import { AccountProxyService } from "./account.service"

describe("AccountProxyService", () => {
	let service: AccountProxyService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [AccountProxyService],
			imports: [createMockModule([{ provide: ClientProxyConfigService, useValue: {} }])]
		}).compile()

		service = module.get<AccountProxyService>(AccountProxyService)
	})

	it("should be defined", () => {
		expect(service).toBeDefined()
	})
})
