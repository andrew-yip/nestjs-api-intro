// MODULARITY

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], // how you handle incoming requests (send back a response)
  providers: [AppService], // extra services/classes that you can inject into other providers to provide functionality
})
export class AppModule { }
