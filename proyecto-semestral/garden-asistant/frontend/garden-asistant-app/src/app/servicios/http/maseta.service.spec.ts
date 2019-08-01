import { TestBed } from '@angular/core/testing';

import { MasetaService } from './maseta.service';

describe('MasetaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasetaService = TestBed.get(MasetaService);
    expect(service).toBeTruthy();
  });
});
