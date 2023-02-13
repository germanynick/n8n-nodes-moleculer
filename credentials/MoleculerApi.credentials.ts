import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class MoleculerApi implements ICredentialType {
	name = 'moleculerApi';
	displayName = 'Moleculer API';
	properties: INodeProperties[] = [
		// The credentials to get from user and save encrypted.
		// Properties can be defined exactly in the same way
		// as node properties.
		{
			displayName: 'Transporter',
			name: 'transporter',
			type: 'json',
			default: 'NATS',
		},
	];
}
