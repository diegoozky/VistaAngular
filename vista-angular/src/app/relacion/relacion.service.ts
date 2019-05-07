import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { relacion } from '../model/relacion.model';

@Injectable({
  providedIn: 'root'
})
export class RelacionService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'multipart/form-data'});

  constructor(private http: HttpClient) {}
  
  public getRelaciones(): Observable<relacion[]>{
    return this.http.get<relacion[]>('http://localhost:8080/relacion/verLista');

  }
  public saveRelacion(r: relacion): Observable<relacion>{
    console.log(r);
    return this.http.post<relacion>('http://localhost:8080/relacion/relacionar?id_candidato='+r.idcandidato.id+'&id_tecnologia='+r.idtecnologia.id+'&experiencia='+r.experiencia+'&nivel='+r.nivel ,{});     
}
public deleteRelacion(id: number): any{
  console.log(id);
  return this.http.delete('http://localhost:8080/relacion/borrar?id='+id);
}
}
