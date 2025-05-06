import { TestBed } from '@angular/core/testing';

import { ReadbdService } from './readbd.service';

describe('ReadbdService', () => {
  let service: ReadbdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadbdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
