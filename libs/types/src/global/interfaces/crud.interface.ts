import { DeleteResult, PaginationOptions, PaginationResult, Query, Update, UpdateResult } from "../types"

export interface Crud<AnyType> {
	findOneById(id: unknown): Promise<AnyType | undefined>
	findOne(query: Query<AnyType>): Promise<AnyType | undefined>
	findMany(query: Query<AnyType>): Promise<AnyType[]>
	findByPagination(paginationOptions: PaginationOptions): Promise<PaginationResult<AnyType>>
	updateOneById(id: unknown, update: Update<AnyType>): Promise<UpdateResult>
	updateMany(query: Query<AnyType>, update: Update<AnyType>): Promise<UpdateResult>
	deleteOneById(id: unknown): Promise<DeleteResult>
	deleteMany(query: Query<AnyType>): Promise<DeleteResult>
}
