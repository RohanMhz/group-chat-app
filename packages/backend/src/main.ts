import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.use(session({
  //   secret: 'your-secret-key', // Replace with your own secret
  //   resave: false,
  //   saveUninitialized: false,
  //   cookie: { secure: false, httpOnly: true, maxAge: 60000 },
  // }));
  
  app.enableCors({
    origin: 'http://localhost:5173', // Your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
