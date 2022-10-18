import { TestBed } from '@angular/core/testing';

import { StudServiceService } from './stud-service.service';

describe('StudServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudServiceService = TestBed.get(StudServiceService);
    expect(service).toBeTruthy();
  });
});
