import { candidato } from './candidato.model';

export class experiencia{
    public id: number;	
	public fecha_inicio: Date;
	public fecha_fin: Date;	
	public  empresa: string;	
	public  clientes: string;	
	public  puesto: string;	
	public  funciones: string;	
    public  entornos: string;
    public id_candidato: candidato;
}