import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Congrats Steve @smart_coder11 @nevy11';
  }
}
