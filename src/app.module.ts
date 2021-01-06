import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from 'nestjs-redis';

@Module({
  imports: [
    RedisModule.register({
      name: 'redisdb',
      host: 'localhost',
      port: 6379,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
