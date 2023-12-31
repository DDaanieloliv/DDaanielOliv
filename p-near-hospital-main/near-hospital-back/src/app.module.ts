import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './app/users/users.module';
import { BasicHealthUnitsModule } from './app/basic-health-units/basic-health-units.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      ssl: true,
    }),
    UsersModule,
    BasicHealthUnitsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
