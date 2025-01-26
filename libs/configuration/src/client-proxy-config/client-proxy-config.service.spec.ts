import { Test, TestingModule } from "@nestjs/testing"

import { EnvironmentService } from "../environment/environment.service"
import { ClientProxyConfigService } from "./client-proxy-config.service"

describe("ClientProxyConfigService", () => {
	let service: ClientProxyConfigService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [ClientProxyConfigService, { provide: EnvironmentService, useValue: {} }]
		}).compile()

		service = module.get<ClientProxyConfigService>(ClientProxyConfigService)
	})

	it("should be defined", () => {
		expect(service).toBeDefined()
	})
})
