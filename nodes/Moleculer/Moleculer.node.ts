import { INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow';
import { IExecuteFunctions } from 'n8n-core';

import * as actions from './actions';

export class Moleculer implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Moleculer',
		name: 'moleculer',
		description: 'Moleculer Services',
		icon: 'file:Moleculer.svg',
		version: 1,
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
		inputs: ['main'],
		outputs: ['main'],
		defaults: {
			name: 'Moleculer',
		},
		group: ['Moleculer'],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'hidden',
				noDataExpression: true,
				default: 'broker',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Call',
						value: 'call',
					},
					{
						name: 'Emit',
						value: 'emit',
					},
					{
						name: 'Broadcast',
						value: 'broadcast',
					},
				],
				default: 'call',
			},
			...actions.call.properties,
			...actions.emit.properties,
			...actions.broadcast.properties,
		],
		credentials: [{ name: 'moleculerApi', required: true }],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();

		const executionData: INodeExecutionData[][] = [];

		for (let index = 0; index < items.length; index++) {
			const operation = this.getNodeParameter('operation', index) as string;
			const action = (actions as any)[operation] as any;

			try {
				let data: INodeExecutionData[] = (await action?.execute.call(this, index)) || [];

				const dataWithMeta: INodeExecutionData[] = data.map((value) => ({
					...value,
					pairedItem: { item: index },
				}));

				executionData.push(dataWithMeta);
			} catch (error) {
				if (this.continueOnFail()) {
					executionData.push([{ json: this.getInputData(index)[0].json, error }]);
				} else {
					if (error.context) error.context.itemIndex = index;
					throw error;
				}
			}
		}

		return executionData;
	}
}
