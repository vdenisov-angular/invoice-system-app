import { TestBed, inject } from '@angular/core/testing';

import { AbstractSubResourceService } from './abstract-sub-resource.service';

describe('AbstractSubResourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbstractSubResourceService]
    });
  });

  it('should be created', inject([AbstractSubResourceService], (service: AbstractSubResourceService) => {
    expect(service).toBeTruthy();
  }));
});
