import { getModelToken } from "@nestjs/mongoose"
import { Test, TestingModule } from "@nestjs/testing"
import { Role, RoleDocument, roleSchema } from "@workspace/types"
import { MongoMemoryReplSet } from "mongodb-memory-server"
import { connect, Connection, FilterQuery, Model } from "mongoose"

import { AccountService } from "./account.service"

describe("AccountService", () => {
	let mongoMemoryServer: MongoMemoryReplSet
	let mongoConnection: Connection
	let model: Model<Role>
	let service: AccountService

	let mockUser: Role
	const mockUsers: Role[] = [
		{
			_id: 1,
			name: "Test",
			lastName: "Mongo Server"
		},
		{
			_id: 2,
			name: "Test 2",
			lastName: "Mongo Server"
		},
		{
			_id: 3,
			name: "Test 3",
			lastName: "Mongo Server"
		}
	]

	beforeAll(async () => {
		mongoMemoryServer = await MongoMemoryReplSet.create()

		const uri = mongoMemoryServer.getUri()

		mongoConnection = (await connect(uri)).connection
		model = mongoConnection.model(Role.name, roleSchema)

		const module: TestingModule = await Test.createTestingModule({
			providers: [
				AccountService,
				{
					provide: getModelToken(Role.name),
					useValue: model
				}
			]
		}).compile()

		service = module.get<AccountService>(AccountService)
	})

	describe("account service is initialized", () => {
		it("then should be defined", () => {
			expect(service).toBeDefined()
		})
	})

	describe("account operations start", () => {
		it("then should not find any user", async () => {
			const filter: FilterQuery<RoleDocument> = {}
			const result = await service.findOne({ filter })

			expect(result).toBeNull()
		})

		it("then should insert first new user", async () => {
			mockUser = mockUsers.shift()

			const result = await service.insert(mockUser)

			expect(result._id).toEqual(mockUser._id)
		})

		it("then should find user with first id", async () => {
			const filter: FilterQuery<RoleDocument> = { _id: mockUser._id }
			const result = await service.findOne({ filter })

			expect(result.name).toEqual(mockUser.name)
		})

		it("then should insert 2 new users", async () => {
			const result = await service.insertMany(mockUsers)

			expect(result.length).toBeGreaterThan(1)
		})

		it("then should find multiple users", async () => {
			const filter: FilterQuery<RoleDocument> = {}
			const result = await service.findMany({ filter })

			expect(result.length).toBeGreaterThan(1)
		})

		it("then should find by second id inserted", async () => {
			const result = await service.findOneById(mockUsers[0]._id)

			expect(result.name).toEqual(mockUsers[0].name)
		})

		it("then should update by last id inserted", async () => {
			const index = mockUsers.length - 1

			const newName = "Updated 3"

			const result = await service.updateOneById(mockUsers[index]._id, { fields: { name: newName } })

			expect(result.modifiedCount).toEqual(1)

			const updatedMockUser = await service.findOneById(mockUsers[index]._id)

			expect(updatedMockUser.name).toEqual(newName)
		})

		it("then should update by last id inserted", async () => {
			const filter: FilterQuery<RoleDocument> = { lastName: "Mongo Server" }

			const accounts = await service.findMany({ filter })

			const newLastName = "Updated all in mongo server"

			const result = await service.updateMany({ filter }, { fields: { lastName: newLastName } })

			expect(result.modifiedCount).toEqual(accounts.length)

			const updatedMockUsers = await service.findMany({ filter: {} })

			expect(updatedMockUsers.every(user => user.lastName === newLastName)).toBe(true)
		})

		it("then should delete by last id inserted", async () => {
			const index = mockUsers.length - 1

			const result = await service.deleteOneById(mockUsers[index]._id)

			expect(result.deletedCount).toEqual(1)

			const filter: FilterQuery<RoleDocument> = {}

			const notFoundUser = await service.findOneById(mockUsers[index]._id)

			expect(notFoundUser).toEqual(null)

			const accounts = await service.findMany({ filter })

			expect(accounts.length).toEqual(mockUsers.length)
		})

		it("then should delete everybody", async () => {
			const filter: FilterQuery<RoleDocument> = {}

			const result = await service.deleteMany({ filter })

			expect(result.deletedCount).toEqual(mockUsers.length)

			const accounts = await service.findMany({ filter })

			expect(accounts.length).toEqual(0)
		})
	})

	afterAll(async () => {
		await mongoMemoryServer.stop({ doCleanup: true })
	})
})
