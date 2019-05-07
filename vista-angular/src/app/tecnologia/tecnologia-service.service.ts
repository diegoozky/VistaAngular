import { Injectable } from '@angular/core';
import { tecnologia } from '../model/tecnologia.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaServiceService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  public getTecnologias(): Observable<tecnologia[]>{

    return this.http.get<tecnologia[]>('http://localhost:8080/tecnologias/ver');

  }

  public updateTecnologias(t: tecnologia): Observable<tecnologia>{
    console.log(t);

    return this.http.put<tecnologia>('http://localhost:8080/tecnologias/actualizar', t , {headers: this.httpHeaders});
  }
  public saveTecnologia(t: tecnologia): Observable<tecnologia>{
    console.log(t);
    return this.http.post<tecnologia>('http://localhost:8080/tecnologias/add', t , {headers: this.httpHeaders});
}
public deleteTecnologia(id: number): any{
  return this.http.delete('http://localhost:8080/tecnologias/borrar?id='+id);
}
}
