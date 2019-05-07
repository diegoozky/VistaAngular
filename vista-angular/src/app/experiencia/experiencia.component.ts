import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from './experiencia.service';
import { experiencia } from '../model/experiencia.model';
import { candidato } from '../model/candidato.model';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  public experiencias: Array<experiencia>;
  public experience: experiencia;
  public c: candidato;
  constructor(private experienciaService: ExperienciaService) { 
    this.experience = new experiencia();
    this.c = new candidato();
    this.experience.id_candidato = this.c;

  }

  ngOnInit() {
    this.loadExperiencia();
  }
  private loadExperiencia(): void {
    this.experienciaService.getExperiencia().subscribe(res => {
     this.experiencias = res;
     console.log(this.experiencias[0]);
 });
 
 }
 private saveExperiencia(): void{
   this.experienciaService.saveExperiencia(this.experience).subscribe();
 }
 private obtenerDatos(x: experiencia): void{
  this.experience = x;
  console.log(this.c);  
}
}
