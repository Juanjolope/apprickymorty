import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Response } from '../models/Response';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private baseUrl = 'https://rickandmortyapi.com/api/character';
  private currentPage = 1;

  constructor(private http: HttpClient) { }

  public getData(): Observable<Response> {
    const url = `${this.baseUrl}?page=${this.currentPage}`;
    return this.http.get<Response>(url);
  }

  public sigueintePagina(): void {
    this.currentPage++;
  }

  public paginaAnterior(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  public getCharacter(id: number): Observable<any> {
    const url = this.baseUrl+`/${id}`;
    return this.http.get(url);
  }
  
}