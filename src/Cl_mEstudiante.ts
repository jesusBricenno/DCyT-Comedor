export interface iEstudiante {
  carrera: string,
  semestre: number,
  cedula: string,
  colaboracion: string
}

export default class Cl_mEstudiante{
    private _carrera: string = "";
    private _semestre: number = 0;
    private _cedula: string = "";
    private _colaboracion: string = "";

    constructor({
        carrera = "",
        semestre = 0,
        cedula = "",
        colaboracion = "",
    }:{
        carrera: string;
        semestre: number;
        cedula: string;
        colaboracion: string;
    }){
        this.carrera = carrera;
        this.semestre = semestre;
        this.cedula = cedula;
        this.colaboracion = colaboracion;
    }

    set carrera(carrera: string) {
        this._carrera = carrera.trim().toUpperCase();
    }

    get carrera(): string {
        return this._carrera;
    }

    set semestre(semestre: number) {
        this._semestre = +semestre;
    }

    get semestre(): number {
        return this._semestre;
    }

    set cedula (cedula: string) {
        this._cedula = cedula.trim().toUpperCase();
    }

    get cedula(): string {
        return this._cedula;
    }

    set colaboracion (colaboracion: string) {
        this._colaboracion = colaboracion.trim().toUpperCase();
    }

    get colaboracion(): string {
        return this._colaboracion;
    }


    toJSON(): iEstudiante {
        return {
            carrera: this._carrera,
            semestre: this._semestre,
            cedula: this._cedula,
            colaboracion: this._colaboracion,
        };
  }
}
