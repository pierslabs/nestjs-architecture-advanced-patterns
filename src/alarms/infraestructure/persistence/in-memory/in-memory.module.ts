import { Module } from '@nestjs/common';
import { AlarmRepository } from '../../../aplication/ports/alarm.repository';
import { InMemoryAlarmRepository } from './repositories/alarm.repository';

@Module({
  imports: [],
  providers: [
    {
      provide: AlarmRepository,
      useClass: InMemoryAlarmRepository,
    },
  ],
  exports: [AlarmRepository],
})
export class InMemoryAlarmPersistenceModule {}
