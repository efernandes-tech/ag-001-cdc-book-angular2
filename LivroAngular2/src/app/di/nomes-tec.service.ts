import { Injectable, Optional } from '@angular/core';
import { MeuLogService } from './meu-log.service';

@Injectable()
export class NomesTecService {

  // meuLog: MeuLogService;

  constructor(@Optional() private meuLog: MeuLogService) {
    // this.meuLog = meuLog;
  }

  getNomesTec(): string [] {
    if (this.meuLog) {
      this.meuLog.setLog('consultou o array de tecnologias');
    }

    return ['Angular 2', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Desenvolvendo com Angular 2'];
  }

}
