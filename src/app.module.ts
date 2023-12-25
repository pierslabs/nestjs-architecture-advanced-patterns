import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { AlarmsModule } from './alarms/aplication/alarms.module';
import { AppController } from './app.controller';
import { CoreModule } from './core/core.module';
import { ApplicationBootstrapOptions } from './alarms/common/interfaces/application-bootstrap-options';
import { AlarmsInfraestructureModule } from './alarms/infraestructure/alarms-infraestructure.module';

@Module({
  imports: [CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static register(options: ApplicationBootstrapOptions) {
    return {
      module: AppModule,
      imports: [
        CoreModule.forRoot(options),
        AlarmsModule.withInfrastucture(
          AlarmsInfraestructureModule.use(options.driver),
        ),
      ],
    };
  }
}
