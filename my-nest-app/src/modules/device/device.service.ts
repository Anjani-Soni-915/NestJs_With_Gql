import { Injectable } from '@nestjs/common';
import {} from 'http';

@Injectable()
export class DeviceService {
  sayHi(): string {
    console.log('hello indore');
    return 'Helo!!!!!!!!!!!!!!!!!!!!!!!!!!!1';
  }
}
