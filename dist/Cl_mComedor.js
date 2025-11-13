export default class Cl_mComedor {
    estudiantes = [];
    agregarEstudiante({ estudiante, callback }) {
        const cedulaRepetida = this.estudiantes.find((e) => e.cedula.toLowerCase() === estudiante.cedula.toLowerCase());
        if (cedulaRepetida) {
            callback(`Ya fue registrado un estudiante con CI: ${estudiante.cedula}`);
            return;
        }
        this.estudiantes.push(estudiante);
        localStorage.setItem("estudiantes", JSON.stringify(this.listar()));
        callback(false);
    }
    listar() {
        let estudiantes = [];
        this.estudiantes.forEach((e) => estudiantes.push(e.toJSON()));
        return estudiantes;
    }
}
