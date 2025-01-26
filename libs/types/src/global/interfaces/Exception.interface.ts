export interface GlobalHttpException extends Error {
	response?: string
	status?: number
}
