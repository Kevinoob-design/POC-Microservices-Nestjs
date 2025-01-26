export abstract class ExceptionConverter<AnyType> {
	abstract convert(exception: Error): AnyType
}
