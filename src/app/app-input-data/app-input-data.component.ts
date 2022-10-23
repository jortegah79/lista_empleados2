import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Empleado } from '../clases/Empleado';
import { GestionEmpleadosService } from '../gestion-empleados.service';
import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'app-input-data',
  templateUrl: './app-input-data.component.html',
  styleUrls: ['./app-input-data.component.css']
})
export class AppInputDataComponent implements OnInit {
  
  lista_empleados:Array<Empleado>=[];
  @Input() indice: number = -1;
  @Input() empleado:Empleado;

  constructor(private mensaje:MessageServiceService,private gestion:GestionEmpleadosService) {
      this.lista_empleados=this.gestion.lista_empleados;
      this.empleado=this.gestion.empleado;
  }

  ngOnInit(): void {
  }
 guardar_empleado(){
   this.gestion.guardar_empleado(this.indice,this.empleado);
   this.empleado=this.gestion.empleado;
 }
 
}