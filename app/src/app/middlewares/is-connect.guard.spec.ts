import { TestBed, async, inject } from '@angular/core/testing';

import { IsConnectGuard } from './is-connect.guard';

describe('IsConnectGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsConnectGuard]
    });
  });

  it('should ...', inject([IsConnectGuard], (guard: IsConnectGuard) => {
    expect(guard).toBeTruthy();
  }));
});
