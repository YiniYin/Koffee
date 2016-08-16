/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { CoffeeService } from './coffee.service';

describe('Service: CoffeeService', () => {
  beforeEach(() => {
    addProviders([CoffeeService]);
  });

  it('should ...',
    inject([CoffeeService],
      (service: CoffeeService) => {
        expect(service).toBeTruthy();
      }));
});
