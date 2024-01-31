import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bem-vindo, meu nome é Ian Santos e eu lhe dou as boas vindas!';
  }
}
