import { candidato } from './candidato.model';
import { tecnologia } from './tecnologia.model';


export class relacion{
    public id: number;
    public idcandidato: candidato;
    public idtecnologia: tecnologia;
    public experiencia: string;
    public nivel: string;
}