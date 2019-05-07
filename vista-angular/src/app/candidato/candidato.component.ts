import { Component, OnInit } from '@angular/core';
import { CandidatoService } from './candidato.service';
import { candidato } from './../model/candidato.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css'],
  providers:[CandidatoService]
})
export class CandidatoComponent implements OnInit {
  
  public c: candidato;
  public can: candidato;
  public candidatos: Array<candidato>;
  constructor(private candidatoService: CandidatoService, private route: Router) { 
    this.c = new candidato();
    this.can = new candidato();

  }

  ngOnInit() {
    this.loadCandidatos();
  }

  private loadCandidatos(): void {
     this.candidatoService.getCandidatos().subscribe(res => {
      this.candidatos = res;
  });
  }

  private obtenerDatos(x: candidato): void{
    this.c = x;
    console.log(this.c);  
  }
  public updateCandidato(): void{
    this.candidatoService.updateCandidato(this.c).subscribe();
    location.reload();

    
  }
  public saveCandidato(): void{
    
    this.candidatoService.saveCandidato(this.can).subscribe();
    location.reload();
  }

  public deleteCandidato(): void{
    this.candidatoService.deleteCandidato(this.c.id).subscribe();
    location.reload();

  }

}
