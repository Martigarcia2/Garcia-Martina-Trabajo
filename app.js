const listaPrincipal = []

function crearCheck(){
    let check = document.createElement("input")
    check.setAttribute("type","checkbox")
    return check
}

function agregarPc(event){
    event.preventDefault()
    let nombre = document.getElementById('pc')
    let error = document.getElementById("error")
    let check = crearCheck()
    listaPrincipal.push({
        nombre: nombre.value,
        error: error.value
    })
    nombre.value = ""
    error.value = ""
    mostrarRegistro()
}

function mostrarRegistro(){
    let tbody = document.getElementById("tbody")
    tbody.innerHTML = ""
    listaPrincipal.map((e,i)=>{
        tbody.innerHTML += `
        <tr>
        <th>${i}</th>
        <td>${e.nombre}</td>
        <td>${e.error}</td>
        <td><input type="checkbox"></td>
        </tr>
        `
    })
}