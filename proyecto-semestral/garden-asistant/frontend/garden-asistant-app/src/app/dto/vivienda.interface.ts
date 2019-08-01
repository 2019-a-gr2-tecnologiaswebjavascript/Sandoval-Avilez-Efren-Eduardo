import { Nivel } from './nivel.interface';
import { Usuario } from './usuario.interface';

export interface Vivienda {
    idVivienda?: number;
    propietarioVivienda: string;
    ubicacionVivienda: string;
    arregloNiveles?: Nivel[];
    fkUsuario: number | Usuario | any;
}
