export enum Environment {
	NODE_ENV = "NODE_ENV",
	HOST = "HOST",
	PORT = "PORT",
	GLOBAL_PREFIX = "GLOBAL_PREFIX",
	DB_URL = "DB_URL",
	AMQP_URL = "AMQP_URL"
}

export type EnvironmentString = "Development" | "Staging" | "Production"
