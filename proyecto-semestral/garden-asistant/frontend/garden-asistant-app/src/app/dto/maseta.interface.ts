import { Area } from './area.interface';

export interface Maseta {
    idMaseta?: number;
    humedadSubstratoMaseta?: number;
    tipoPlantaMaseta?: string;
    fkArea: number | Area | any;
}
