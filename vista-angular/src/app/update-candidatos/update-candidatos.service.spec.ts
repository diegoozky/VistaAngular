import { TestBed } from '@angular/core/testing';

import { UpdateCandidatosService } from './update-candidatos.service';

describe('UpdateCandidatosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateCandidatosService = TestBed.get(UpdateCandidatosService);
    expect(service).toBeTruthy();
  });
});
