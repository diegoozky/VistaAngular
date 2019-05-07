import { Component, OnInit } from '@angular/core';
import { RelacionService } from './relacion.service';
import { relacion } from '../model/relacion.model';
import { candidato } from '../model/candidato.model';
import { tecnologia } from '../model/tecnologia.model';

@Component({
  selector: 'app-relacion',
  templateUrl: './relacion.component.html',
  styleUrls: ['./relacion.component.css']
})
export class RelacionComponent implements OnInit {
  public relaciones: Array<any>;
  public r: relacion;
  public r1: relacion;
  public c: candidato;
  public t: tecnologia;

  constructor(private relacionService: RelacionService) { 
    this.r = new relacion();
    this.r1 = new relacion();
    this.c = new candidato();
    this.t = new tecnologia();
    this.r1.idcandidato = this.c;
    this.r1.idtecnologia = this.t;

  }

  ngOnInit() {
    this.loadRelaciones();
  }

    private loadRelaciones(): void{
        this.relacionService.getRelaciones().subscribe(res => {
            this.relaciones = res;
            console.log(this.relaciones);
        });
    }
    public obtenerDatos(t: relacion): void{
      this.r = t;
  }
  public saveRelacion(): void{
  
    this.relacionService.saveRelacion(this.r1).subscribe();
  
  }
  public deleteRelacion(): void{
    this.relacionService.deleteRelacion(this.r.id).subscribe();
    console.log("component "+ this.r.id);
  
  }
}
