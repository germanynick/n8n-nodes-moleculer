import { IMoleculerBrokerProperties } from '../../types';

export const properties: IMoleculerBrokerProperties = [
	{
		displayName: 'Action Name',
		name: 'actionName',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: { resource: ['broker'], operation: ['call'] },
		},
	},
	{
		displayName: 'Params (JSON)',
		name: 'params',
		type: 'json',
		default: '',
		typeOptions: {
			editor: 'json',
		},
		displayOptions: {
			show: { resource: ['broker'], operation: ['call'] },
		},
	},
	{
		displayName: 'Context (JSON)',
		name: 'context',
		type: 'json',
		default: '',
		typeOptions: {
			editor: 'json',
		},
		displayOptions: {
			show: { resource: ['broker'], operation: ['call'] },
		},
	},
];
