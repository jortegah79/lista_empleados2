import { Injectable } from '@angular/core';
import { Empleado } from './clases/Empleado';
import { MessageServiceService } from './message-service.service';

@Injectable({
  providedIn: 'root'
})
export class GestionEmpleadosService {
  empleado: Empleado;
  lista_empleados: Array<Empleado> = [];

  constructor(private mensaje: MessageServiceService) {

    this.lista_empleados = [
      new Empleado("Juan", "Ortega", 1450, "Programador"),
      new Empleado("Susana", "Ortiz", 1300, "Administradora"),
      new Empleado("Oscar", "Lopez", 1890, "Programador-senior"),
      new Empleado("Silvia", "Fernandez", 1566, "Actriz"),
      new Empleado("Alfonso", "Pedraza", 1050, "Barrendero"),
    ];
    this.empleado = new Empleado("", "", 0, "");
  }

  delete_empleado(indice: number): void {
    this.mensaje.muestra_mensaje(`El empleado ${this.lista_empleados[indice].nombre} ${this.lista_empleados[indice].apellido} ha sido eliminado.`)
    this.lista_empleados.splice(indice, 1);

  }
  edit_empleado(index: number): Empleado {
    console.log(this.lista_empleados);
    if (this.lista_empleados[index].nombre !== null) {
      return this.lista_empleados[index];
    } else {
      return new Empleado("", "", 0, "");
    };
    
  }
  guardar_empleado(indice: number, empleado: Empleado) {
    if (indice == -1) {
      this.mensaje.muestra_mensaje(`El nuevo el nuevo empleado es ${empleado.nombre} ${empleado.apellido}.`);
    this.lista_empleados.push(empleado);
    } else {
      this.mensaje.muestra_mensaje(`El empleado es ${empleado.nombre} ${empleado.apellido} ha sido actualizado.`);
      this.lista_empleados[indice].nombre=empleado.nombre;
      this.lista_empleados[indice].apellido=empleado.apellido;
      this.lista_empleados[indice].sueldo=empleado.sueldo;
      this.lista_empleados[indice].cargo=empleado.cargo;
    }    
    empleado = new Empleado("", "", 0, "");
  }
}
