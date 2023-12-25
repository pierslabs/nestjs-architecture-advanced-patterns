import { Alarm } from 'src/alarms/domain/alarm';
import { AlarmEntity } from '../entities/alarm.entity';
import { AlarmSeverity } from 'src/alarms/domain/value-objects/alarm-severity';

export class AlarmMapper {
  static toDomain(alarmEntity: AlarmEntity): Alarm {
    const alarmaSeverity = new AlarmSeverity(
      alarmEntity.severity as 'critical' | 'high' | 'medium' | 'low',
    );

    const alarmModel = new Alarm(
      alarmEntity.id,
      alarmEntity.name,
      alarmaSeverity,
    );

    return alarmModel;
  }

  static toPersistence(alarm: Alarm) {
    const entity = new AlarmEntity();

    entity.id = alarm.id;
    entity.name = alarm.name;
    entity.severity = alarm.severity.value;
    return entity;
  }
}
