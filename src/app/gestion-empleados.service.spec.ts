import { TestBed } from '@angular/core/testing';

import { GestionEmpleadosService } from './gestion-empleados.service';

describe('GestionEmpleadosService', () => {
  let service: GestionEmpleadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionEmpleadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
