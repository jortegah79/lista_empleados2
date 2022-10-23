import { Component } from '@angular/core';
import { Empleado } from '../app/clases/Empleado';
import { GestionEmpleadosService } from './gestion-empleados.service';

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

  constructor(private gestion:GestionEmpleadosService) {
    this.lista_empleados=this.gestion.lista_empleados;
    this.empleado =this.gestion.empleado;
  }
  edit_empleado(i:number):void{
    this.indice=i;
    this.empleado=this.gestion.edit_empleado(i);
  }
  delete_empleado(i:number){
    this.gestion.delete_empleado(i);
  }
 
}