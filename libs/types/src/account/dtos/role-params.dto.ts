import { ApiProperty } from "@nestjs/swagger"
import { IsNumberString } from "class-validator"

export class GetAccountParamsDto {
	@ApiProperty()
	@IsNumberString()
	id: number
}
