import { IMoleculerTriggerProperties } from '../../types';

export const properties: IMoleculerTriggerProperties = [
	{
		displayName: 'Service Name',
		name: 'serviceName',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: { resource: ['trigger'], operation: ['action'] },
		},
	},
	{
		displayName: 'Action Name',
		name: 'actionName',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: { resource: ['trigger'], operation: ['action'] },
		},
	},
];
