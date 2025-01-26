import { Test, TestingModule } from "@nestjs/testing"
import { ClientProxyConfigService } from "@workspace/configuration"
import { createMockModule } from "@workspace/utils"

import { HealthProxyService } from "./health.service"

describe("HealthProxyService", () => {
	let service: HealthProxyService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [HealthProxyService],
			imports: [createMockModule([{ provide: ClientProxyConfigService, useValue: {} }])]
		}).compile()

		service = module.get<HealthProxyService>(HealthProxyService)
	})

	it("should be defined", () => {
		expect(service).toBeDefined()
	})
})
