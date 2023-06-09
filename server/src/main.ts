import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import { JwtGuard } from 'src/auth/guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000',
    preflightContinue: false,
    credentials: true,
  });
  app.use(cookieParser());

  const reflector = new Reflector();
  app.useGlobalGuards(new JwtGuard(reflector)); // auth.module.ts providers
  await app.listen(8000);
}

bootstrap();
