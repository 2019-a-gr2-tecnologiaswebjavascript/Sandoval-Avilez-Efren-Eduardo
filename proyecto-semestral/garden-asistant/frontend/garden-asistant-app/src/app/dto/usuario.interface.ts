import { Vivienda } from './vivienda.interface';

export interface Usuario {
    idUsuario?: number;
    nombreUsuario: string;
    apellidoUsuario: string;
    cedulaUsuario: string;
    correoUsuario?: string;
    passwordUsuario: string;
    rolUsuario?: string;
    arregloViviendas?: Vivienda[];
    createdAt?: number;
    updatedAt?: number;
}
