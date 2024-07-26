import { TestBed } from '@angular/core/testing';

import { NatureContratService } from './nature-contrat.service';

describe('NatureContratService', () => {
  let service: NatureContratService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NatureContratService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
