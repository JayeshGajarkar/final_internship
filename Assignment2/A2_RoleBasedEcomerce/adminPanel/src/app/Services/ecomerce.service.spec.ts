import { TestBed } from '@angular/core/testing';

import { EcomerceService } from './ecomerce.service';

describe('EcomerceService', () => {
  let service: EcomerceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcomerceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
