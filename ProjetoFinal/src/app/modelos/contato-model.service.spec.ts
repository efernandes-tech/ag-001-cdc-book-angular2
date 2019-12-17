import { TestBed, inject } from '@angular/core/testing';

import { ContatoModelService } from './contato-model.service';

describe('ContatoModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContatoModelService]
    });
  });

  it('should be created', inject([ContatoModelService], (service: ContatoModelService) => {
    expect(service).toBeTruthy();
  }));
});
