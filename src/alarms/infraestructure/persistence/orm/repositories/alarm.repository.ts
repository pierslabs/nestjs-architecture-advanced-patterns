import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlarmRepository } from 'src/alarms/aplication/ports/alarm.repository';
import { AlarmEntity } from '../entities/alarm.entity';
import { Repository } from 'typeorm';
import { Alarm } from 'src/alarms/domain/alarm';
import { AlarmMapper } from '../mappers/alarm.mapper';

@Injectable()
export class OrmAlarmRepository implements AlarmRepository {
  constructor(
    @InjectRepository(AlarmEntity)
    private readonly alarmRepository: Repository<AlarmEntity>,
  ) {}

  async findAll(): Promise<Alarm[]> {
    const entitties = await this.alarmRepository.find();

    return entitties.map((entity) => AlarmMapper.toDomain(entity));
  }

  async save(alarm: Alarm): Promise<Alarm> {
    const persitenceModel = AlarmMapper.toPersistence(alarm);
    const newEntity = await this.alarmRepository.save(persitenceModel);

    return AlarmMapper.toDomain(newEntity);
  }
}
