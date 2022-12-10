import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Categoria/';

  constructor(private http: HttpClient ) { }

  getCategorias(): Observable<categoria[]> {
    return this.http.get<categoria[]>(`${this.myAppUrl}${this.myApiUrl}`);

  }

  getCategoria(id: number): Observable<categoria>{
    return this.http.get<categoria>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  deleteCategoria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  addCategoria(categoria: categoria): Observable<categoria> {
   return this.http.post<categoria>(`${this.myAppUrl}${this.myApiUrl}`, categoria);
  }

  updateCategoria(id: number, categoria: categoria): Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, categoria);
  }
}
