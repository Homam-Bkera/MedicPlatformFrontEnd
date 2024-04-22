import { TestBed } from '@angular/core/testing';

import { MedicneService } from './medicne.service';

describe('MedicneService', () => {
  let service: MedicneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
