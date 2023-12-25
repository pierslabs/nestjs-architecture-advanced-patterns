import { Module } from '@nestjs/common';
import { OrmAlarmPersistenceModule } from './persistence/orm/orm-persistence.module';
import { InMemoryAlarmPersistenceModule } from './persistence/in-memory/in-memory.module';

@Module({})
export class AlarmsInfraestructureModule {
  static use(driver: 'orm' | 'in-memory') {
    const persitenceModule =
      driver === 'orm'
        ? OrmAlarmPersistenceModule
        : InMemoryAlarmPersistenceModule;

    return {
      module: AlarmsInfraestructureModule,
      imports: [persitenceModule],
      exports: [persitenceModule],
    };
  }
}
