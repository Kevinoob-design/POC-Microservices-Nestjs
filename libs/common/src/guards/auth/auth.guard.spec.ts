import { ClientProxy } from "@nestjs/microservices"
import { ClientProxyConfigService } from "@workspace/configuration"
import { AuthProxyService } from "@workspace/proxy-clients"

import { AuthGuard } from "./auth.guard"

describe("AuthGuard", () => {
	class MockClass extends AuthProxyService {
		constructor() {
			super(new ClientProxyConfigService(null))
		}

		createClientProxy(): ClientProxy {
			return null
		}
	}

	it("should be defined", () => {
		expect(new AuthGuard(new MockClass())).toBeDefined()
	})
})
