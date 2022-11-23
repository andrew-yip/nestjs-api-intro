// ENTRY POINT of nest.js application (when you start dev server / build application)
// gets compiled to javascript

// uses modularity

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
