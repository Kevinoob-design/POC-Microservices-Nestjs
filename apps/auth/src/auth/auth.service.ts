import { Injectable } from "@nestjs/common"

@Injectable()
export class AuthService {
	canActivate(headers: any) {
		return headers
	}

	login() {
		return {
			message: "you have successfully logged in",
			timeStamp: new Date().toISOString()
		}
	}
}
