import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cluster from "cluster"
import { cpus } from "os"

const port = process.env.PORT || 5000

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors()

  await app.listen(port);
}


bootstrap()