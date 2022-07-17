import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ValidarReactiveComponent } from './validar-reactive/validar-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ReactiveComponent,
    ValidarReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
