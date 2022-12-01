const API_URL = "http://localhost:8080/pacientes/";

export async function listaPacientes() {
    const res = await fetch(API_URL);
    return await res.json();
}

export async function findPacienteById(id) {
    const res = await fetch(API_URL + id);
    const data = await res.json();
    return data;
}

export async function deletePacienteById(id) {
    const options = { method: "DELETE" }
    const res = await fetch(API_URL + id, options);
    const texto = await res.text();
    return texto;
}

export async function savePaciente(paciente) {
    const options = {
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(paciente)
    }
    const res = await fetch(API_URL, options);
    return await res.text();
}
