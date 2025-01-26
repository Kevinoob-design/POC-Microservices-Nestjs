import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import {
	Crud,
	DeleteResult,
	PaginationOptions,
	PaginationResult,
	Query,
	Role,
	RoleDocument,
	Update,
	UpdateResult
} from "@workspace/types"
import { FilterQuery, Model } from "mongoose"

@Injectable()
export class AccountService implements Crud<RoleDocument> {
	constructor(@InjectModel(Role.name) private readonly model: Model<RoleDocument>) {}

	async insert(account: Role): Promise<RoleDocument> {
		const newAccount = await this.model.create(account)

		return newAccount.save()
	}

	async insertMany(accounts: Role[]): Promise<RoleDocument[]> {
		const newAccount = await this.model.create(accounts)

		return Promise.all(newAccount.map(account => account.save()))
	}

	findOneById(id: number): Promise<RoleDocument> {
		return this.model.findOne({ _id: id }).exec()
	}

	findOne(query: Query<FilterQuery<RoleDocument>>): Promise<RoleDocument> {
		return this.model.findOne({ ...query.filter }, { ...query.projection }).exec()
	}

	findMany(query: Query<FilterQuery<RoleDocument>>): Promise<RoleDocument[]> {
		return this.model.find({ ...query.filter }, { ...query.projection }).exec()
	}

	findByPagination(paginationOptions: PaginationOptions): Promise<PaginationResult<RoleDocument>> {
		return Promise.resolve({
			total: 0,
			totalPages: 0,
			page: 1,
			data: []
		})
	}

	updateOneById(id: unknown, update: Update<RoleDocument>): Promise<UpdateResult> {
		return this.model.updateOne({ _id: id }, { ...update.fields }).exec()
	}

	updateMany(query: Query<FilterQuery<RoleDocument>>, update: Update<RoleDocument>): Promise<UpdateResult> {
		return this.model.updateMany({ ...query.filter }, { ...update.fields }).exec()
	}

	deleteOneById(id: number): Promise<DeleteResult> {
		return this.model.deleteOne({ _id: id }).exec()
	}

	deleteMany(query: Query<FilterQuery<RoleDocument>>): Promise<DeleteResult> {
		return this.model.deleteMany({ ...query.filter }).exec()
	}
}
