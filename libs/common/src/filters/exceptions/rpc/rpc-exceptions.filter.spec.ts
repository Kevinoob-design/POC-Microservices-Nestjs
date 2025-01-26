import { RpcExceptionsFilter } from "./rpc-exceptions.filter"

describe("HttpExceptionsFilter", () => {
	it("should be defined", () => {
		expect(new RpcExceptionsFilter()).toBeDefined()
	})
})
