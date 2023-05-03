import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // const reflector = new Reflector();
  // app.useGlobalGuards(new JwtGuard(reflector)); // auth.module.ts providers
  await app.listen(8000);
}

bootstrap();
