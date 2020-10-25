import { TestBed } from '@angular/core/testing';

import { ModelBoxService } from './model-box.service';

describe('ModelBoxService', () => {
  let service: ModelBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
