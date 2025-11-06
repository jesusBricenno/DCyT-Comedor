import Cl_mEstudiante, { iEstudiante } from "./Cl_mEstudiante.js";
import Cl_mComedor from "./Cl_mComedor.js";
import Cl_vComedor from "./Cl_vComedor.js";

export default class Cl_controlador {
  public modelo: Cl_mComedor;
  public vista: Cl_vComedor;
  constructor(modelo: Cl_mComedor, vista: Cl_vComedor) {
    this.modelo = modelo;
    this.vista = vista;
  }
  agregarEstudiante({estudianteData, callback}: {estudianteData: iEstudiante, callback: Function}): void {
    this.modelo.agregarEstudiante({
      estudiante: new Cl_mEstudiante(estudianteData),
      callback: (error: string | false) => {
        callback(error);
      },
    });
  }
  estudiantesRegistrados(): iEstudiante[] {
    return this.modelo.listar();
  }
}