import { ITriggerFunctions } from 'n8n-core';
import { ITriggerResponse } from 'n8n-workflow';
import { ServiceBroker } from 'moleculer';

export async function trigger(this: ITriggerFunctions): Promise<ITriggerResponse | undefined> {
	const credentials = await this.getCredentials('moleculerApi');
	const broker = new ServiceBroker({ ...credentials, nodeID: this.getNode().id });

	const serviceName = this.getNodeParameter('serviceName') as string;
	const actionName = this.getNodeParameter('actionName') as string;

	const executeTrigger = (data: any) => {
		this.emit([this.helpers.returnJsonArray([data])]);
	};

	broker.createService({
		name: serviceName,
		actions: {
			[actionName]: {
				handler(ctx) {
					executeTrigger(ctx);
				},
			},
		},
	});

	broker.start();

	async function closeFunction() {
		broker.stop();
	}

	async function manualTriggerFunction() {
		executeTrigger({});
	}

	return {
		closeFunction,
		manualTriggerFunction,
	};
}
