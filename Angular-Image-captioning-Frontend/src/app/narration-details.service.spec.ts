import { TestBed } from '@angular/core/testing';

import { NarrationDetailsService } from './narration-details.service';

describe('NarrationDetailsService', () => {
  let service: NarrationDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NarrationDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
