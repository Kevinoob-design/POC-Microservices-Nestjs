import { Injectable } from "@nestjs/common"
import { MicroserviceOptions, RmqOptions, Transport } from "@nestjs/microservices"
import { MicroserviceHealthIndicatorOptions } from "@nestjs/terminus"
import { RmqMsgs, RmqQueues } from "@workspace/types"

import { EnvironmentService } from "../environment/environment.service"

@Injectable()
export class ClientProxyConfigService {
	constructor(private readonly environmentService: EnvironmentService) {}

	getMicroserviceOptions(queue: RmqQueues): MicroserviceOptions {
		return {
			transport: Transport.RMQ,
			options: {
				urls: this.environmentService.getRabbitMqUrls(),
				queue
			}
		}
	}

	getRmqConfigOptions(queue: RmqQueues): RmqOptions {
		return {
			transport: Transport.RMQ,
			options: {
				urls: this.environmentService.getRabbitMqUrls(),
				queue
			}
		}
	}

	getRmqCheckConfigOptions(queue: RmqQueues, messagePattern: RmqMsgs): MicroserviceHealthIndicatorOptions {
		return {
			transport: Transport.RMQ,
			options: {
				urls: this.environmentService.getRabbitMqUrls(),
				queueMicrotask: queue,
				MessagePattern: messagePattern
			}
		}
	}
}
