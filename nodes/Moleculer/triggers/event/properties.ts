import { IMoleculerTriggerProperties } from '../../types';

export const properties: IMoleculerTriggerProperties = [
	{
		displayName: 'Service Name',
		name: 'serviceName',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: { resource: ['trigger'], operation: ['event'] },
		},
	},
	{
		displayName: 'Event Name',
		name: 'eventName',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: { resource: ['trigger'], operation: ['event'] },
		},
	},
];
