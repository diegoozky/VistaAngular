import { Component, OnInit } from '@angular/core';
import { tecnologia } from '../model/tecnologia.model';
import { TecnologiaServiceService } from './tecnologia-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {
  public tecnologias: Array<tecnologia>;
  public t: tecnologia;
  public t1: tecnologia;
  constructor(private tecnologiaService: TecnologiaServiceService,  private route: Router) {
    this.t = new tecnologia();
    this.t1 = new tecnologia();
   }

  ngOnInit() {
    this.loadTecnologias();
  }

  public loadTecnologias(): void{
    this.tecnologiaService.getTecnologias().subscribe(res =>{
      this.tecnologias = res;
    });
  }

  public updateTecnologia(t: tecnologia): void{
    this.tecnologiaService.updateTecnologias(this.t).subscribe();
    location.reload();
  }
  public obtenerDatos(t: tecnologia): void{
      this.t = t;
  }

public saveTecnologia(): void{
  
  this.tecnologiaService.saveTecnologia(this.t1).subscribe();
  location.reload();

}
public deleteTecnologia(): void{
  this.tecnologiaService.deleteTecnologia(this.t.id).subscribe();
  location.reload();

}

}
