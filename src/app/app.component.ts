import { Component } from '@angular/core';
import { Empleado } from '../app/clases/Empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'LISTA EMPLEADOS';
  lista_empleados: Array<Empleado> = [];
  empleado: Empleado;
  indice: number = -1;

  constructor() {
    this.lista_empleados = [
      new Empleado("Juan", "Ortega", 1450, "Programador"),
      new Empleado("Susana", "Ortiz", 1300, "Administradora"),
      new Empleado("Oscar", "Lopez", 1890, "Programador-senior"),
      new Empleado("Silvia", "Fernandez", 1566, "Actriz"),
      new Empleado("Alfonso", "Pedraza", 1050, "Barrendero"),
    ];
    this.empleado = new Empleado("", "", 0, "");
  }

  edit_empleado(index: number): void {
    if (this.lista_empleados[index].nombre !== null) {
      this.empleado = this.lista_empleados[index];
    } else {
      this.empleado = new Empleado("", "", 0, "");
    };
    this.indice = index;
  }

  delete_empleado(indice: number): void {

    this.lista_empleados.splice(indice, 1);

  }
  onGuardar(empleado: Empleado) {    
    if (this.indice == -1) {
      this.lista_empleados.push(empleado);
    } else {
      this.lista_empleados[this.indice] = empleado;
    }
    this.indice = -1;
    this.empleado = new Empleado("", "", 0, "");
  }
}