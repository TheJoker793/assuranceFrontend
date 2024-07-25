import { TestBed } from '@angular/core/testing';

import { QuittanceprimeService } from './quittanceprime.service';

describe('QuittanceprimeService', () => {
  let service: QuittanceprimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuittanceprimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
