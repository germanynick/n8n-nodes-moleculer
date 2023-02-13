import { IExecuteFunctions } from 'n8n-core';
import { INodeExecutionData } from 'n8n-workflow';
import { ServiceBroker } from 'moleculer';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('moleculerApi', index);
	const broker = new ServiceBroker(credentials);

	const actionName = this.getNodeParameter('actionName', index) as string;
	const params = (this.getNodeParameter('params', index) as any) || {};
	const context = (this.getNodeParameter('context', index) as any) || {};

	const result = await broker
		.start()
		.then(() => broker.call(actionName, params, context))
		.finally(() => broker.stop());

	return this.helpers.returnJsonArray(result as any);
}
