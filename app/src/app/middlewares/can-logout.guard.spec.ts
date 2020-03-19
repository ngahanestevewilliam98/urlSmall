import { TestBed, async, inject } from '@angular/core/testing';

import { CanLogoutGuard } from './can-logout.guard';

describe('CanLogoutGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanLogoutGuard]
    });
  });

  it('should ...', inject([CanLogoutGuard], (guard: CanLogoutGuard) => {
    expect(guard).toBeTruthy();
  }));
});
