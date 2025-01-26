import { Crud, DeleteResult, PaginationOptions, PaginationResult, Query, Update, UpdateResult } from "@workspace/types"

export class DatabaseMock<AnyType extends { [key: string]: unknown }> implements Crud<AnyType> {
	private _data: AnyType[] = []

	findOneById(id: unknown): Promise<AnyType | undefined> {
		return Promise.resolve(this._data.find(item => item._id === id))
	}

	findOne(query: Query<AnyType>): Promise<AnyType | undefined> {
		return Promise.resolve(
			this._data.find(item => {
				return Object.keys(query).every(key => item[key] === query.filter[key])
			})
		)
	}

	findMany(query: Query<AnyType>): Promise<AnyType[]> {
		return Promise.resolve(
			this._data.filter(item => {
				return Object.keys(query).every(key => item[key] === query.filter[key])
			})
		)
	}

	findByPagination(paginationOptions: PaginationOptions): Promise<PaginationResult<AnyType>> {
		return Promise.resolve({
			total: 0,
			totalPages: 0,
			page: 1,
			data: []
		})
	}

	async updateOneById(id: unknown, update: Update<AnyType>): Promise<UpdateResult> {
		let data = await this.findOneById(id)

		if (data) {
			data = Object.assign(data, update)
		}

		return {
			acknowledged: data ? true : false,
			modifiedCount: data ? 1 : 0,
			upsertedId: data ? data._id : undefined,
			upsertedCount: data ? 1 : 0,
			matchedCount: data ? 1 : 0
		}
	}

	async updateMany(query: Query<AnyType>, update: Update<AnyType>): Promise<UpdateResult> {
		let data = await this.findMany(query)

		if (data.length) {
			data = data.map(item => Object.assign(item, update))
		}

		return {
			acknowledged: data ? true : false,
			modifiedCount: data ? 1 : 0,
			upsertedId: data ? data.length : undefined,
			upsertedCount: data ? 1 : 0,
			matchedCount: data ? 1 : 0
		}
	}

	deleteOneById(id: unknown): Promise<DeleteResult> {
		const currentLength = this._data.length

		this._data = this._data.filter(item => item._id !== id)

		return Promise.resolve({
			acknowledged: true,
			deletedCount: currentLength - this._data.length
		})
	}

	deleteMany(query: Query<AnyType>): Promise<DeleteResult> {
		const currentLength = this._data.length

		this._data = this._data.filter(item => {
			return !Object.keys(query).every(key => item[key] === query.filter[key])
		})

		return Promise.resolve({
			acknowledged: true,
			deletedCount: currentLength - this._data.length
		})
	}
}
