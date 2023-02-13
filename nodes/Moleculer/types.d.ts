import { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type MoleculerMap = {
	broker: 'call' | 'emit' | 'broadcast';
	trigger: 'event' | 'action';
};

export type IMoleculer = AllEntities<MoleculerMap>;

export type IMoleculerBroker = Entity<MoleculerMap, 'broker'>;
export type IMoleculerTrigger = Entity<MoleculerMap, 'trigger'>;

export type IMoleculerBrokerProperties = PropertiesOf<IMoleculerBroker>;
export type IMoleculerTriggerProperties = PropertiesOf<IMoleculerTrigger>;
