import { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type MoleculerMap = {
	broker: 'call' | 'emit' | 'broadcast';
};

export type IMoleculer = AllEntities<MoleculerMap>;

export type IMoleculerBroker = Entity<MoleculerMap, 'broker'>;

export type IMoleculerBrokerProperties = PropertiesOf<IMoleculerBroker>;
