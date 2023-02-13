import { INodeType, INodeTypeDescription, ITriggerResponse } from 'n8n-workflow';
import { ITriggerFunctions } from 'n8n-core';

import * as triggers from './triggers';

export class MoleculerTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Moleculer Trigger',
		name: 'moleculerTrigger',
		description: 'Moleculer Trigger',
		icon: 'file:Moleculer.svg',
		version: 1,
		subtitle:
			'={{ $parameter["operation"] + ": " + ($parameter["eventName"] ||$parameter["actionName"])}}',
		inputs: [],
		outputs: ['main'],
		defaults: {
			name: 'Moleculer Trigger',
		},
		group: ['moleculer', 'trigger'],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'hidden',
				noDataExpression: true,
				default: 'trigger',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Action',
						value: 'action',
					},
					{
						name: 'Event',
						value: 'event',
					},
				],
				default: 'action',
			},
			...triggers.action.properties,
			...triggers.event.properties,
		],
		credentials: [{ name: 'moleculerApi', required: true }],
	};

	async trigger(this: ITriggerFunctions): Promise<ITriggerResponse | undefined> {
		const operation = this.getNodeParameter('operation') as string;

		const trigger = (triggers as any)[operation] as any;

		return trigger?.trigger?.call(this);
	}
}
