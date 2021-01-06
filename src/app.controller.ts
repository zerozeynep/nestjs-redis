import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod, MessagePattern } from "@nestjs/microservices"

interface ISomeString {
  data : string;
}
interface IHelloString {
  helloResponse : string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('AppController', 'SetHello')

  async setHello(data : ISomeString) : Promise<IHelloString> {
    return { helloResponse: await this.appService.setHello(data.data)}
  }

  @GrpcMethod('AppController', 'GetHello')

  async getHello() : Promise<IHelloString> {
    return { helloResponse : await this.appService.getHello()}
  }
}
