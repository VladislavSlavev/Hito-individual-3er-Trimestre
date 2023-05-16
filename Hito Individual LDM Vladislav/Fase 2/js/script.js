const repositorio_thead = document.querySelector(".contenido-thead");
const repositorio_tbody = document.querySelector(".contenido-tbody");

    fetch("https://www.el-tiempo.net/api/json/v1/provincias")
    .then(function(response) {
        return response.json();
    })
    
    .then(function(respuestas) {
        let mostrar_thead = "";
        let mostrar_tbody = "";

        mostrar_thead += `
        <tr>
        <th scope="col">Código Provincia</th>
        <th scope="col">Nombre</th>
        <th scope="col">CODAUTON</th>
        <th scope="col">Comunidad-Ciudad Autónoma</th>
        <th scope="col">Capital</th>
        </tr>                
        `;
            for (let respuesta of respuestas) {

                mostrar_tbody += `
                    <tr>
                    <td>${respuesta.CODPROV}</td>
                    <td>${respuesta.NOMBRE_PROVINCIA}</td>
                    <td>${respuesta.CODAUTON}</td>
                    <td>${respuesta.COMUNIDAD_CIUDAD_AUTONOMA}</td>
                    <td>${respuesta.CAPITAL_PROVINCIA}</td>
                    </tr>
                `;
            }
            repositorio_thead.innerHTML = mostrar_thead;
            repositorio_tbody.innerHTML = mostrar_tbody;
        })



