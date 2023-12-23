import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { AlarmsModule } from './alarms/aplication/alarms.module';
import { AppController } from './app.controller';

@Module({
  imports: [AlarmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
