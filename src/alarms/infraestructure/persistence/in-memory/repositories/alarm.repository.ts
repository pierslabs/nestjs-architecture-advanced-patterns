import { Injectable } from '@nestjs/common';
import { AlarmRepository } from 'src/alarms/aplication/ports/alarm.repository';
import { Alarm } from 'src/alarms/domain/alarm';
import { AlarmMapper } from '../mappers/alarm.mapper';
import { AlarmEntity } from '../../orm/entities/alarm.entity';

@Injectable()
export class InMemoryAlarmRepository implements AlarmRepository {
  private readonly alarms = new Map<string, AlarmEntity>();

  async findAll(): Promise<Alarm[]> {
    const entitties = Array.from(this.alarms.values());
    return entitties.map((entity) => AlarmMapper.toDomain(entity));
  }

  async save(alarm: Alarm): Promise<Alarm> {
    const persitenceModel = AlarmMapper.toPersistence(alarm);
    this.alarms.set(persitenceModel.id, persitenceModel);
    const newAlarm = this.alarms.get(persitenceModel.id);
    return AlarmMapper.toDomain(newAlarm);
  }
}
