/*El DCyT de la Universidad Centroccidental Lisandro Alvarado
*requiere desarrollar una micro-app que sea encargada de registrar
*la información de los estudiantes comprometidos con la restauración
*del comedor estudiantil. De cada estudiante se conoce: su cedula,
*la carrera que estudian, el semestre en curso, y la colaboración 
*aportada para el comedor*/ 

import Cl_controlador from "./Cl_controlador.js";
import Cl_mComedor from "./Cl_mComedor.js";
import Cl_vComedor from "./Cl_vComedor.js";
import Cl_mEstudiante, { iEstudiante } from "./Cl_mEstudiante.js";
export default class Cl_index {
  public modelo: Cl_mComedor;
  public vista: Cl_vComedor;
  constructor() {
    this.modelo = new Cl_mComedor();
    let LSestudiantes= localStorage.getItem("estudiantes");
    if(LSestudiantes){
      let estudiantesDT = JSON.parse(LSestudiantes);
      estudiantesDT.forEach((estudiante:iEstudiante)=> {
        this.modelo.agregarEstudiante({
          estudiante: new Cl_mEstudiante(estudiante),
          callback: (error: string |false) => {
            if (error) alert(error);
          }
        })
      })
    }
    this.vista = new Cl_vComedor();
    let controlador = new Cl_controlador(this.modelo, this.vista);
    this.vista.controlador = controlador;
    this.vista.refresh();
  }
} 