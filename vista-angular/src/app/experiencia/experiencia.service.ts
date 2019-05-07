import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { experiencia } from '../model/experiencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient ) { }

  public saveExperiencia(e: experiencia): Observable<experiencia>{
    console.log(e);
    return this.http.post<experiencia>('http://localhost:8080/exp/add', e , {headers: this.httpHeaders});
  }

  public getExperiencia(): Observable<experiencia[]> {
    return this.http.get<experiencia[]>('http://localhost:8080/exp/listar');
  }
}
