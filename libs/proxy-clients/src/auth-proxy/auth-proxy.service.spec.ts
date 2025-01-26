import { Test, TestingModule } from "@nestjs/testing"
import { ClientProxyConfigService } from "@workspace/configuration"
import { createMockModule } from "@workspace/utils"

import { AuthProxyService } from "./auth-proxy.service"

describe("AuthProxyService", () => {
	let service: AuthProxyService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [AuthProxyService],
			imports: [createMockModule([{ provide: ClientProxyConfigService, useValue: {} }])]
		}).compile()

		service = module.get<AuthProxyService>(AuthProxyService)
	})

	it("should be defined", () => {
		expect(service).toBeDefined()
	})
})
