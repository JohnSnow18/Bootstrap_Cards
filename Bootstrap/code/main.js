
var contenido = document.querySelector('#contenido')

function traer() {
    fetch('/Bootstrap/code/tabla.json')
        .then(res => res.json())
        .then(datos => {
            tabla(datos)
        })
}

function tabla(datos) {
    contenido.innerHTML = ''
    for (let valor of datos) {
        contenido.innerHTML +=
            `     
        <div class="col s3" style="width: 220; height: 320;">
            <div class="card">
                <div class="card-image waves-effect ">
                    <img class="activator" src=${valor.idPel} width="220" height="320"></div>
                    <div class="card-content">
                        <span class="card-title activator black-text ">Sinopsis<i class="material-icons right">more_vert</i></span>
                    </div>
                    
                    <div class="card-reveal blue lighten-5" >
                        <span class="card-title black-text ">${valor.titulo}<i class="material-icons right">close</i></span>
                        <span class="black-text "><p>${valor.descripcion}</p></span>
                        <a href="${valor.url}" target="_blank" rel="nofollow" class="btn btn-primary">Ver Pelicula</a>
                    </div>
                </div>
            </div>
        `

    }
}
