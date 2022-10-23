import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor() { }

  muestra_mensaje(mensaje:string):void{
    alert(mensaje);
  }
}
