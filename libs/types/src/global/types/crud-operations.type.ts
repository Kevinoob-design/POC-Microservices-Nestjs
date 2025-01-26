export type Query<AnyType> = {
	filter: Partial<AnyType>
	orderBy?: string
	orderDirection?: "ASC" | "DESC"
	limit?: number
	projection?: Partial<AnyType>
}

export type Insert<AnyType> = {
	fields: AnyType
}

export type Update<AnyType> = {
	fields: Partial<AnyType>
}

export type OperationResult<AnyType> = {
	data: Partial<AnyType>
}

export type UpdateResult = {
	acknowledged: boolean
	matchedCount: number
	modifiedCount: number
	upsertedCount: number
	upsertedId: unknown
}

export type DeleteResult = {
	acknowledged: boolean
	deletedCount: number
}

export type QueryOptions<AnyType> = {
	projection?: Partial<AnyType>
}

export type PaginationOptions = {
	page: number
	limit: number
	sort: string
	order: string
	search: string
	searchFields: string[]
}

export type PaginationResult<AnyType> = Partial<PaginationOptions> & {
	total: number
	totalPages: number
	data: AnyType[]
}
