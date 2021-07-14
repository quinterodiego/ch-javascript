class Tarea {
    constructor(tarea, prioridad, fecha){
        this.tarea = tarea;
        this.prioridad = prioridad;
        this.fecha = fecha;
    }
}

class Metodo {
    agregarTarea(tarea){
        const listaTarea = document.getElementById('listaTarea');
        const elemento = document.createElement('div');
        elemento.innerHTML = `
            <div class="card text-center mt-5">
                <div class="card-body d-flex justify-content-around">
                    <strong>Tarea:</strong> ${tarea.tarea}
                    <strong>Prioridad:</strong> ${tarea.prioridad}
                    <strong>Fecha:</strong> ${tarea.fecha}
                </div>
            </div>
        `;
        listaTarea.appendChild(elemento);
    };

    resetearFormulario(){
        document.getElementById('formularioTarea').reset();
    };

}

document.getElementById('formularioTarea').addEventListener('submit', function(e){
    const tarea = document.getElementById('tarea').value;
    const prioridad = document.querySelector('#prioridad').value;
    const fecha = document.querySelector('#fecha').value;

    const tareas = new Tarea(tarea, prioridad, fecha);
    const usarMetodo = new Metodo();
    usarMetodo.agregarTarea(tareas);
    usarMetodo.resetearFormulario();
    e.preventDefault();
});