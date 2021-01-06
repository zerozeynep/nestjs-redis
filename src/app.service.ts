import { Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';

const key = 'hello'

@Injectable()
export class AppService {
  constructor(
    private readonly redisService : RedisService,
  ) {}

  client = this.redisService.getClient('redisdb')

  async getHello(): Promise<string> {
    const name =  await this.client.get(key);
    return `Hello ${name}`;
  }

  async setHello(data): Promise<string> {
    const res =  await this.client.set(key, data)
    return res
 }
}
