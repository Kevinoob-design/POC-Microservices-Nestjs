import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

export type RoleDocument = Role & Document & { [key: string]: unknown }

@Schema({ timestamps: true, collection: "ROLE" })
export class Role {
	@Prop({ required: true })
	_id: number

	@Prop({ required: true })
	name: string

	@Prop({ required: true })
	lastName: string
}

export const roleSchema = SchemaFactory.createForClass(Role)
