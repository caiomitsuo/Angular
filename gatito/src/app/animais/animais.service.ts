import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://localhost3000';
@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private http:HttpClient) { }

  listaDoUsuario(nomeDoUsuario: string):Observable<Animais> {
    return this.http.get<Animais>(`$`)
  }
}
