import { AccountRabbitMqQueues } from "../../queues/account-queues.enum"
import { AuthRabbitMqQueues } from "../../queues/auth-queues.enum"
import { HealthRabbitMqQueues } from "../../queues/health-queues.enum"

export type RmqQueues = AccountRabbitMqQueues | AuthRabbitMqQueues | HealthRabbitMqQueues
