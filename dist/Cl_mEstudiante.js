export default class Cl_mEstudiante {
    _carrera = "";
    _semestre = 0;
    _cedula = "";
    _colaboracion = "";
    constructor({ carrera = "", semestre = 0, cedula = "", colaboracion = "", }) {
        this.carrera = carrera;
        this.semestre = semestre;
        this.cedula = cedula;
        this.colaboracion = colaboracion;
    }
    set carrera(carrera) {
        this._carrera = carrera.trim().toUpperCase();
    }
    get carrera() {
        return this._carrera;
    }
    set semestre(semestre) {
        this._semestre = +semestre;
    }
    get semestre() {
        return this._semestre;
    }
    set cedula(cedula) {
        this._cedula = cedula.trim().toUpperCase();
    }
    get cedula() {
        return this._cedula;
    }
    set colaboracion(colaboracion) {
        this._colaboracion = colaboracion.trim().toUpperCase();
    }
    get colaboracion() {
        return this._colaboracion;
    }
    toJSON() {
        return {
            carrera: this._carrera,
            semestre: this._semestre,
            cedula: this._cedula,
            colaboracion: this._colaboracion,
        };
    }
}
