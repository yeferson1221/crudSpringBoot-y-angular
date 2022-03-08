export class Empleado {
    id?: number;
    nombre: string;
    apellido: string;
    email: string;
    tel: number;

    constructor(nombre: string, apellido: string, correo: string, tel: number ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = correo;
        this.tel = tel;

    }
}
