import { TestBed } from '@angular/core/testing';

import { ViviendaService } from './vivienda.service';

describe('ViviendaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViviendaService = TestBed.get(ViviendaService);
    expect(service).toBeTruthy();
  });
});
