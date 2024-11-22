import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { reunionGuard } from './reunion.guard';

describe('reunionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => reunionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
