import { TestBed, inject } from '@angular/core/testing';

import { Services\loginService } from './services\login.service';

describe('Services\loginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Services\loginService]
    });
  });

  it('should be created', inject([Services\loginService], (service: Services\loginService) => {
    expect(service).toBeTruthy();
  }));
});
