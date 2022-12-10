import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { categoria } from 'src/app/interfaces/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-ver-categoria',
  templateUrl: './ver-categoria.component.html',
  styleUrls: ['./ver-categoria.component.css']
})
export class VerCategoriaComponent implements OnInit {
  id: number;
  categoria!: categoria;
  loading: boolean = false;

  constructor(private _categoriaService: CategoriaService,
     private aRoute: ActivatedRoute) {
        this.id = Number(this.aRoute.snapshot.paramMap.get('id')!);
    }

  ngOnInit(): void {
    this.obtenerCategoria();
  }

  obtenerCategoria() {
    this.loading = true;
    this._categoriaService.getCategoria(this.id).subscribe(data => {
      this.categoria = data;
      this.loading = false;
    })
  }

}
