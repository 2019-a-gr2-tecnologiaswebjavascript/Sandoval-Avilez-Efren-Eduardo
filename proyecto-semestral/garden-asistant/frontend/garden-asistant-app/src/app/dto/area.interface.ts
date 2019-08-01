import { Maseta } from './maseta.interface';
import { Nivel } from './nivel.interface';

export interface Area {
    idArea?: number;
    tipoArea?: string;
    arregloMasetas?: Maseta[];
    fkNivel: number | Nivel | any;
}
