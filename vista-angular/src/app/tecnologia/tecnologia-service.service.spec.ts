import { TestBed } from '@angular/core/testing';

import { TecnologiaServiceService } from './tecnologia-service.service';

describe('TecnologiaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TecnologiaServiceService = TestBed.get(TecnologiaServiceService);
    expect(service).toBeTruthy();
  });
});
