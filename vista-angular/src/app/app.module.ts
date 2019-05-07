import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatoComponent } from './candidato/candidato.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { RelacionComponent } from './relacion/relacion.component';
import { UpdateCandidatosComponent } from './update-candidatos/update-candidatos.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatoComponent,
    
    TecnologiaComponent,
    RelacionComponent,
    UpdateCandidatosComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
