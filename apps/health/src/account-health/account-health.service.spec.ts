import { MicroserviceHealthIndicator } from "@nestjs/terminus"
import { Test, TestingModule } from "@nestjs/testing"
import { ClientProxyConfigService } from "@workspace/configuration"
import { createMockModule } from "@workspace/utils"

import { AccountHealthService } from "./account-health.service"

describe("AccountHealthService", () => {
	let service: AccountHealthService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [AccountHealthService],
			imports: [
				createMockModule([
					{
						provide: MicroserviceHealthIndicator,
						useValue: { createClientProxy: jest.fn() }
					},
					{
						provide: ClientProxyConfigService,
						useValue: { createClientProxy: jest.fn() }
					}
				])
			]
		}).compile()

		service = module.get<AccountHealthService>(AccountHealthService)
	})

	it("should be defined", () => {
		expect(service).toBeDefined()
	})
})
