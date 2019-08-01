import { Area } from './area.interface';
import { Vivienda } from './vivienda.interface';

export interface Nivel {
    idNivel?: number;
    ordinalNivel: number;
    arregloAreas?: Area[];
    fkVivienda: number | Vivienda | any;
}
