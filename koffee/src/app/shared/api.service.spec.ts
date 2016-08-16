/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ApiService } from './api.service';

describe('Service: Api', () => {
  beforeEach(() => {
    addProviders([ApiService]);
  });

  it('should ...',
    inject([ApiService],
      (service: ApiService) => {
        expect(service).toBeTruthy();
      }));
});