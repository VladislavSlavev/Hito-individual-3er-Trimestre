const repositorio_thead = document.querySelector(".repositorio-thead");
const repositorio_tbody = document.querySelector(".repositorio-tbody");

    fetch("https://www.el-tiempo.net/api/json/v1/provincias")
    .then(function(response) {
        return response.json();
    })
    
    .then(function(respuestas) {
        let out_thead = "";
        let out_tbody = "";

        out_thead += `
        <tr>
        <th scope="col">Código Provincia</th>
        <th scope="col">Nombre</th>
        <th scope="col">CODAUTON</th>
        <th scope="col">Comunidad-Ciudad Autónoma</th>
        <th scope="col">Capital</th>
        </tr>                
        `;
            for (let respuesta of respuestas) {

                out_tbody += `
                    <tr>
                    <td>${respuesta.CODPROV}</td>
                    <td>${respuesta.NOMBRE_PROVINCIA}</td>
                    <td>${respuesta.CODAUTON}</td>
                    <td>${respuesta.COMUNIDAD_CIUDAD_AUTONOMA}</td>
                    <td>${respuesta.CAPITAL_PROVINCIA}</td>
                    </tr>
                `;
            }
            repositorio_thead.innerHTML = out_thead;
            repositorio_tbody.innerHTML = out_tbody;
        })



