
async function cargarDatos(){
    const response = await fetch('data/personal.json');
    const data = await response.json();

    const cards = document.getElementById('cards');

    cards.innerHTML = `
        <div class="card">
            <h3>TOTAL PERSONAL</h3>
            <h1>${data.length}</h1>
        </div>

        <div class="card">
            <h3>DISTRITOS</h3>
            <h1>12</h1>
        </div>

        <div class="card">
            <h3>OPERATIVOS</h3>
            <h1>3400</h1>
        </div>

        <div class="card">
            <h3>ADMINISTRATIVOS</h3>
            <h1>354</h1>
        </div>
    `;

    const tabla = document.getElementById('tablaPersonal');

    data.forEach(p=>{
        tabla.innerHTML += `
        <tr>
            <td>${p.distrito}</td>
            <td>${p.grado}</td>
            <td>${p.nombre}</td>
            <td>${p.cedula}</td>
            <td>${p.tipo}</td>
            <td>${p.estado}</td>
        </tr>
        `;
    });
}

cargarDatos();
