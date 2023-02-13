import { IExecuteFunctions } from 'n8n-core';
import { INodeExecutionData } from 'n8n-workflow';
import { ServiceBroker } from 'moleculer';
import { Json } from '../../utils/json';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('moleculerApi', index);
	const broker = new ServiceBroker(credentials);

	const eventName = this.getNodeParameter('eventName', index) as string;
	const payload = (this.getNodeParameter('payload', index) as any) || {};
	const context = (this.getNodeParameter('context', index) as any) || {};

	const result = await broker
		.start()
		.then(() => broker.emit(eventName, Json.parse(payload), Json.parse(context)))
		.finally(() => broker.stop());

	return this.helpers.returnJsonArray(result as any);
}
