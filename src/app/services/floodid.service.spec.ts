import { TestBed } from '@angular/core/testing';

import { FloodidService } from './floodid.service';

describe('FloodidService', () => {
  let service: FloodidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FloodidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
