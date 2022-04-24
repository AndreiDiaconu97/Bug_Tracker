import { TestBed } from '@angular/core/testing';

import { BugTrackerApiService } from './bugtrackerapi.service';

describe('ClientappService', () => {
  let service: BugTrackerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BugTrackerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
