import Cl_mEstudiante, { iEstudiante } from "./Cl_mEstudiante.js";

export default class Cl_mComedor {
    private estudiantes: Cl_mEstudiante[] = [];

    agregarEstudiante({estudiante, callback}:{estudiante: Cl_mEstudiante, callback: (error: string | false) => void}): void {
        const cedulaRepetida = this.estudiantes.find(
          (e) => e.cedula.toLowerCase() === estudiante.cedula.toLowerCase()
    );

    if (cedulaRepetida) {
      callback(`Ya fue registrado un estudiante con CI: ${estudiante.cedula}`);
      return;
    }
    
    this.estudiantes.push(estudiante);
    callback(false);
}

 listar(): iEstudiante[] {
    let estudiantes: iEstudiante[] = [];
    this.estudiantes.forEach((e) => estudiantes.push(e.toJSON()));
    return estudiantes;
  }
}