import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { candidato } from '../model/candidato.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient ) { }

  public getCandidatos(): Observable<candidato[]> {
          return this.http.get<candidato[]>('http://localhost:8080/candidatos/ver');

  }
  public updateCandidato(c: candidato): Observable<candidato>{
    console.log(c);
    return this.http.put<candidato>('http://localhost:8080/candidatos/actualizar', c , {headers: this.httpHeaders});
  }  
  public saveCandidato(c: candidato): Observable<candidato>{
      return this.http.post<candidato>('http://localhost:8080/candidatos/add', c , {headers: this.httpHeaders});
  }
  public deleteCandidato(id: number): any{
    return this.http.delete('http://localhost:8080/candidatos/borrar?id='+id);
  }

}

