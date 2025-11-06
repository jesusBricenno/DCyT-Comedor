import { iEstudiante } from "./Cl_mEstudiante.js";
import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";

export default class Cl_vComedor extends Cl_vGeneral{
    private btAgregarEstudiante: HTMLButtonElement;
    private divEstudiantesRegistrados: HTMLDivElement;
    constructor() {
        super({ formName: "comedor" });
        this.btAgregarEstudiante = this.crearHTMLButtonElement("btAgregarEstudiante", {
            onclick: () => this.agregarEstudiante(),
        });

        this.divEstudiantesRegistrados = this.crearHTMLElement("divAgregarEstudiante", {
            type: tHTMLElement.CONTAINER,
            refresh: () => this.mostrarEstudiantesRegistrados()
        }) as HTMLDivElement
    }
    
    mostrarEstudiantesRegistrados() {
        this.divEstudiantesRegistrados.innerHTML = "";
        let estudiantes = this.controlador?.estudiantesRegistrados();
        if (!estudiantes) return;
        estudiantes.forEach((estudiante: iEstudiante) => {
            this.divEstudiantesRegistrados.innerHTML += `
            <tr>
                <td>${estudiante.carrera}</td>
                <td>${estudiante.semestre}</td>
                <td>${estudiante.cedula}</td>
                <td>${estudiante.colaboracion}</td>
            </tr>
            `;
        });
    }
    agregarEstudiante(){
        let carrera= prompt("ingrese la carrera que cursa");
        if(!carrera) return;
        let semestre= prompt("indique el semestre que esta cursando");
        if(!semestre) return;
        let cedula = prompt("indique el número de su cédula");
        if(!cedula) return;
        let colaboracion= prompt("indique la colaboración que hizo");
        if(!colaboracion) return ;
        this.controlador!.agregarEstudiante({
            estudianteData:{
                carrera: carrera,
                semestre: +semestre,
                cedula: cedula,
                colaboracion: colaboracion
            },
            callback:(error:string|false)=> {
                if(error) alert(error);
                this.refresh()
            },
        });
    }
}