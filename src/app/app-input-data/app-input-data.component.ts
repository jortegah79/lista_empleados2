import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Empleado } from '../clases/Empleado';

@Component({
  selector: 'app-input-data',
  templateUrl: './app-input-data.component.html',
  styleUrls: ['./app-input-data.component.css']
})
export class AppInputDataComponent implements OnInit {

  @Input() empleado: Empleado;
  @Input() indice: number = -1;
  @Output() guardar = new EventEmitter<Empleado>();

  constructor() {
    this.empleado = new Empleado("", "", 0, "");
  }

  ngOnInit(): void {
  }

  guardar_empleado() {
    this.guardar.emit(this.empleado);
    this.empleado = new Empleado("", "", 0, "");
  }
}