import { IMoleculerBrokerProperties } from '../../types';

export const properties: IMoleculerBrokerProperties = [
	{
		displayName: 'Event Name',
		name: 'eventName',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: { resource: ['broker'], operation: ['emit'] },
		},
	},
	{
		displayName: 'Payload (JSON)',
		name: 'payload',
		type: 'json',
		default: '',
		typeOptions: {
			editor: 'json',
		},
		displayOptions: {
			show: { resource: ['broker'], operation: ['emit'] },
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
			show: { resource: ['broker'], operation: ['emit'] },
		},
	},
];
