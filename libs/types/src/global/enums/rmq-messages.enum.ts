import { AccountRabbitMqMsgs } from "../../account"
import { AuthRabbitMqMsgs } from "../../auth"
import { HealthRabbitMqMsgs } from "../../health"

export type RmqMsgs = AccountRabbitMqMsgs | AuthRabbitMqMsgs | HealthRabbitMqMsgs
