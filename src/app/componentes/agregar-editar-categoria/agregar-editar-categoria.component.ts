import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { categoria } from 'src/app/interfaces/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-agregar-editar-categoria',
  templateUrl: './agregar-editar-categoria.component.html',
  styleUrls: ['./agregar-editar-categoria.component.css']
})
export class AgregarEditarCategoriaComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup
  id: number;

  operacion: string = 'Agregar';

  constructor(private fb: FormBuilder,
    private _categoriaService: CategoriaService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.form = this.fb.group({
      nombre: ['', Validators.required ]
    })

    this.id = Number(this.aRoute.snapshot.paramMap.get('id'))
   }

  ngOnInit(): void {
    if(this.id != 0){
      this.operacion = 'Editar';
      this.obtenerCategoria(this.id)
    }
  }

  obtenerCategoria(id: number){
    this.loading = true;
    this._categoriaService.getCategoria(id).subscribe(data => {
      this.form.setValue({
        nombre: data.nombre
      })
      this.loading = false;
    })
  }

  agregarEditarCategoria() {
    //armado objeto
    const categoria: categoria = {
      nombre: this.form.value.nombre
    }
    if(this.id != 0){
      categoria.id = this.id;
      this.editarCategoria(this.id, categoria);
    }else{
      this.agregarCategoria(categoria);
    }
  }

  editarCategoria(id: number, categoria: categoria){
    this.loading = true;
    this._categoriaService.updateCategoria(id, categoria).subscribe(() =>{
      this.loading = false;
      this.mensajeExito('actualizada');
      this.router.navigate(['/ListCategoria']);
    })

  }

  agregarCategoria(categoria: categoria) {
    this._categoriaService.addCategoria(categoria).subscribe(data =>{
      this.mensajeExito('registrada');
      this.router.navigate(['/ListCategoria']);
    })
  }

  mensajeExito(texto: string) {
    this._snackBar.open(`La categoria fue ${texto} con exito`, '',{
      duration: 4000
  });
}

}
