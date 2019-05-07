import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatoComponent } from './candidato/candidato.component';
import { AppComponent } from './app.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { RelacionComponent } from './relacion/relacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';

const routes: Routes = [
  {path: 'candidatos', component: CandidatoComponent},
  {path: '', redirectTo: '/candidatos', pathMatch: 'full'},
 {path: 'appComponent', component: AppComponent},
 { path: 'tecnologias', component: TecnologiaComponent},
 { path: 'relacion', component: RelacionComponent},
 { path: 'experiencia', component: ExperienciaComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
