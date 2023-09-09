import L from "leaflet"


const butonActualizar = document.getElementById("actualizar");
const map = L.map('map', {
    center: [15.525158, -90.32959],
    zoom: 7,
})

const mapLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

const markerLayer = L.layerGroup(); 

const iconMap = L.icon({
    iconUrl : './images/cit.png',
    iconSize : [35, 35]
})

// const marker = L.marker([15.525158, -90.32959],{
//     iconMap
// }).addTo(markerLayer)

// var tooltip = L.tooltip()
//     .setLatLng([15.525158, -90.32959])
//     .setContent('Hello world!<br />This is a nice tooltip.')
//     .addTo(map);

//     var popup = L.popup()
//     .setLatLng([15.525158, -90.32959])
//     .setContent('<p>Hello world!<br />This is a nice popup.</p>')

//     marker.bindPopup(popup)

    const coordenadas = [
        // [14.1, -90.5],
        // [14.3, -90.8],
        // [14.6, -90.9],
        // [15.0, -90.6],
        // [15.3, -90.7]
      ];

//  var polygon = L.polygon(coordenadas, {color: 'red'}).addTo(map);
// L.circle([14.6, -90.9], {radius: 5000}).addTo(map);
markerLayer.addTo(map)


const buscarAPI = async () => {
    const url = `/prueba_mapas/API/buscar`;
    const config = {
        method: 'GET'
    }

    try {
        const respuesta = await fetch(url, config);
        const data = await respuesta.json();

        console.log(data);

        if (data && data.length > 0) {
            data.forEach(registro => {
                const latitud = parseFloat(registro.marcador_latitud);
                const longitud = parseFloat(registro.marcador_longitud);

                if (!isNaN(latitud) && !isNaN(longitud)) {
                    const NuevoMarcador = L.marker([latitud, longitud], {
                        icon:iconMap,
                        draggable: true
                    });
                    const popup = L.popup()
                        .setLatLng([latitud, longitud])
                        .setContent(`<p>Nombre: ${registro.marcador_nombre}</p>
                                     <p>Latitud: ${latitud}</p>
                                     <p>Longitud: ${longitud}</p>`);

                                     console.log('3')
                    NuevoMarcador.bindPopup(popup);
                    NuevoMarcador.addTo(markerLayer);
                    
                }
            })
        

        } 
        

    } catch (error) {
        console.error('Error al cargar los datos desde la base de datos:', error);
    }
}


buscarAPI()
butonActualizar.addEventListener("click",buscarAPI())