export interface ClassConstructor<AnyType> {
	new (...args: unknown[]): AnyType
}
