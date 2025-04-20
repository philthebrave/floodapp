import { TestBed } from '@angular/core/testing';

import { FloodService } from './flood.service';

describe('FloodService', () => {
  let service: FloodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FloodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
