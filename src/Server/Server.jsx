const API_URL = "http://129.213.162.212:8080/";

export async function listaPacientes() {
    const res = await fetch(API_URL+"pacientes/");
    return await res.json();
}

export async function findPacienteById(id) {
    const res = await fetch(API_URL+"pacientes/" + id);
    const data = await res.json();
    return data;
}

export async function deletePacienteById(id) {
    const options = { method: "DELETE" }
    const res = await fetch(API_URL+"pacientes/" + id, options);
    const texto = await res.text();
    return texto;
}

export async function savePaciente(paciente) {
    const options = {
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(paciente)
    }
    const res = await fetch(API_URL+"pacientes/", options);
    return await res.text();
}

export async function listaAgendas() {
    const res = await fetch(API_URL+"agendas/");
    const data = await res.json();
    return data;

};

export async function findAgendaById(id){
    const res = await fetch(API_URL+"agendas/"+id);
    const data = await res.json();
    return data;
}
