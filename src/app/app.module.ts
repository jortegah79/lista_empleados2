import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppInputDataComponent } from './app-input-data/app-input-data.component';
import { MessageServiceService } from './message-service.service';
import { GestionEmpleadosService } from './gestion-empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    AppInputDataComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [MessageServiceService,GestionEmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
