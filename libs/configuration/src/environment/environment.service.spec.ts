import { ConfigService } from "@nestjs/config"
import { Test, TestingModule } from "@nestjs/testing"
import { createMockModule } from "@workspace/utils"

import { EnvironmentService } from "./environment.service"

describe("EnvironmentService", () => {
	let service: EnvironmentService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [EnvironmentService],
			imports: [createMockModule([{ provide: ConfigService, useValue: {} }])]
		}).compile()

		service = module.get<EnvironmentService>(EnvironmentService)
	})

	it("should be defined", () => {
		expect(service).toBeDefined()
	})
})
