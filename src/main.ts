import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.enableCors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  });

  const config = new DocumentBuilder()
    .setTitle('Dashboard Insight API')
    .setDescription('Documentação da API feita por Ian Santos')
    .setContact(
      'Ian Santos',
      'https://github.com/IanDeSa/dashboard-insight-api',
      'contato.iansantos@gmail.com',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('dispositivos')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb' }));

  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();
