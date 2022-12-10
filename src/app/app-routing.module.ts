import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//componentes
import { ListadoCategoriaComponent } from './componentes/listado-categoria/listado-categoria.component';
import { AgregarEditarCategoriaComponent } from './componentes/agregar-editar-categoria/agregar-editar-categoria.component';
import { VerCategoriaComponent } from './componentes/ver-categoria/ver-categoria.component';

const routes: Routes = [
  {path: '', redirectTo: 'listCategoria', pathMatch: 'full'},
  {path: 'listCategoria', component: ListadoCategoriaComponent},
  {path: 'agregarCategoria', component: AgregarEditarCategoriaComponent},
  {path: 'verCategoria/:id', component: VerCategoriaComponent},
  {path: 'editarCategoria/:id', component: AgregarEditarCategoriaComponent},
  {path: '**', redirectTo: 'listCategoria', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
