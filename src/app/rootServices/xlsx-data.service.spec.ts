import { TestBed } from '@angular/core/testing';

import { XlsxDataService } from './xlsx-data.service';

describe('XlsxDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XlsxDataService = TestBed.get(XlsxDataService);
    expect(service).toBeTruthy();
  });
});
