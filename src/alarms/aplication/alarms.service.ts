import { Injectable } from '@nestjs/common';

import { CreateAlarmCommand } from './commands/create-alarm.command';

@Injectable()
export class AlarmsService {
  create(createAlarmCommand: CreateAlarmCommand) {
    console.log(createAlarmCommand);
    return 'This action adds a new alarm';
  }

  findAll() {
    return `This action returns all alarms`;
  }
}
