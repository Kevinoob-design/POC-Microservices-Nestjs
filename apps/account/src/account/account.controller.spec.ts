import { Test, TestingModule } from "@nestjs/testing"
import { RoleDocument } from "@workspace/types"
import { DatabaseMock } from "@workspace/utils"

import { AccountController } from "./account.controller"
import { AccountService } from "./account.service"

describe("AccountController", () => {
	let controller: AccountController

	const databaseMock = new DatabaseMock<RoleDocument>()

	const mockAccountService: Partial<AccountService> = {
		findOneById: databaseMock.findOneById.bind(databaseMock)
	}

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [AccountController],
			providers: [
				{
					provide: AccountService,
					useValue: mockAccountService
				}
			]
		}).compile()

		controller = module.get<AccountController>(AccountController)
	})

	it("should be defined", () => {
		expect(controller).toBeDefined()
	})

	it("should get undefined on find by Id", async () => {
		const data = await controller.findOneById({ id: 123 })

		expect(data).toBeUndefined()
	})
})
