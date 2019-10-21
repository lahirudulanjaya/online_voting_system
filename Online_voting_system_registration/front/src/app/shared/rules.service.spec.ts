import { TestBed } from '@angular/core/testing';

import { RulesService } from './rules.service';

describe('RulesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RulesService = TestBed.get(RulesService);
    expect(service).toBeTruthy();
  });
});
