import { Expose } from "class-transformer"

export class AccountExposeDto {
	@Expose()
	_id: number
}
