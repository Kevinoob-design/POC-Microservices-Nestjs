import { MicroserviceHealthIndicator } from "@nestjs/terminus"
import { Test, TestingModule } from "@nestjs/testing"
import { ClientProxyConfigService } from "@workspace/configuration"
import { createMockModule } from "@workspace/utils"

import { AuthHealthService } from "./auth-health.service"

describe("AuthHealthService", () => {
	let service: AuthHealthService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [AuthHealthService],
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

		service = module.get<AuthHealthService>(AuthHealthService)
	})

	it("should be defined", () => {
		expect(service).toBeDefined()
	})
})
