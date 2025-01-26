import { SerializeInterceptor } from "./serialize.interceptor"

describe("SerializeInterceptor", () => {
	class MockClass {}

	it("should be defined", () => {
		expect(new SerializeInterceptor(MockClass)).toBeDefined()
	})
})
