import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//MODULOS
import { SharedModule } from './shared/shared.module';

//componentes
import { AgregarEditarCategoriaComponent } from './componentes/agregar-editar-categoria/agregar-editar-categoria.component';
import { ListadoCategoriaComponent } from './componentes/listado-categoria/listado-categoria.component';
import { VerCategoriaComponent } from './componentes/ver-categoria/ver-categoria.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarCategoriaComponent,
    ListadoCategoriaComponent,
    VerCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
