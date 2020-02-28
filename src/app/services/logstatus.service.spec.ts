import { TestBed } from '@angular/core/testing';

import { LogstatusService } from './logstatus.service';

describe('LogstatusService', () => {
  let service: LogstatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogstatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
