import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { categoria } from 'src/app/interfaces/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';



@Component({
  selector: 'app-listado-categoria',
  templateUrl: './listado-categoria.component.html',
  styleUrls: ['./listado-categoria.component.css']
})
export class ListadoCategoriaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nombre', 'acciones'];
  dataSource = new MatTableDataSource<categoria>();
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar,
    private _categoriaService:CategoriaService) { }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if(this.dataSource.data.length > 0){
      this.paginator._intl.itemsPerPageLabel = 'Categorias por pagina'
    }

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  obtenerCategorias() {

    this.loading = true;
    this._categoriaService.getCategorias().subscribe(data =>{
      this.loading = false;
      this.dataSource.data = data;
    }, error => {
      this.loading = false;
      alert('Uppss ocurrio un error')
    })
  }

  eliminarCategoria(id: number){
    this.loading = true;

    this._categoriaService.deleteCategoria(id).subscribe(() =>{
      this.mensajeExito();
      this.loading = false;
      this.obtenerCategorias();
    });
  }

  mensajeExito(){
    this._snackBar.open('La categoria fue eliminada con exito', '',{
      duration: 4000
  });
}
}
