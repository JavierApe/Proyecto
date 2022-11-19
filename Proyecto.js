const traidoDelStorage = localStorage.getItem("usuario");
const jsonAobjeto = JSON.parse(traidoDelStorage);
jsonAobjeto[5] = parseInt(jsonAobjeto[5])
const numeros = /^[0-9]$/ // expresion regular para validar campos de textos
const res = document.getElementById("resumen")

//Api de clima cargadno un CP, ID y APP_key para poder acceder a los datos
let url = 'http://api.weatherunlocked.com/api/current/ar.B1884GHJ?app_id=b6077be0&app_key=ece929813358c3dbfcb633ae6bea9585';
fetch(url)
    .then(response => response.json()) // Convertir a JSON
    .then(data => {
        let body = ""
        body += `<tr><td> PROVINCIA</td><td>CIUDAD</td><td>TEMPERATURA</td></tr>`
        body += `<tr><td>BUENOS AIRES</td><td>BERAZATEGUI</td><td>${data.temp_c}</td></tr>`
        document.getElementById("data").innerHTML = body

    }

    )
    .catch(err => console.log("Solicitud fallida", err))// Capturo errores


// let celsius=data.temp_f
// let bodys = ""

switch (jsonAobjeto[5]) {
    case 1:
        Swal.fire('HOLA, Le recordamos que  el ultimo registro fue de ALOJAMIENTO')
        break;
    case 2:
        Swal.fire('HOLA, Le recordamos que el ultimo registro fue de ADIESTRAMIENTO')
        break;
    case 3:
        Swal.fire('HOLA, Le recordamos que el ultimo registro fue de PASEO')
        break;
}

//Botones
let botonUno = document.getElementById("boton1");
let botonDos = document.getElementById("boton2");
let botonTres = document.getElementById("boton3");

//Contenedores o divs
let contenedorUno = document.getElementById("div1");
let contenedorDos = document.getElementById("div2");
let contenedorTres = document.getElementById("div3");

const datos = [];
//let resumen = document.getElementById("datosCargados")

botonUno.addEventListener("click", () => {
    mostrarDiv(contenedorUno);
    verDivRes(res)
    
  
})
botonDos.addEventListener("click", () => {
    mostrarDiv(contenedorDos);
    verDivRes(res)
    
    })
botonTres.addEventListener("click", () => {
    mostrarDiv(contenedorTres);
    verDivRes(res)
})

function verDivRes(div){
    if (div.classList.contains("oculto")) {

        console.log("esta oculto");//Muestra el div
    } else {
        div.classList.add("oculto");//oculta el div
       
    }
}




function mostrarDiv(div) {
    document.getElementById("nombreCargado").value = ""
    document.getElementById("telCargado").value = ""
    document.getElementById("nmc").value = ""
    document.getElementById("razaR").value = ""
    document.getElementById("costo").value = "" 
    if (div.classList.contains("oculto")) {
        div.classList.remove("oculto");//Muestra el div
    } else {
        div.classList.add("oculto");//oculta el div
       
    }
}

function validarCampo(campo) {
    if (campo.length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error en el Ingreso de los datos'

        })
    }
}

//vairables Div Paseo
let nombreP = document.getElementById("nombreP");
let telefonoP = document.getElementById("telefonoP");
let nomMascotaP = document.getElementById("nomMascotaP");
let razaP = document.getElementById("razaP");
let diaP = document.getElementById("diaP");

//variables Div Guarderia
let nombreG = document.getElementById("nombreG");
let telefonoG = document.getElementById("telefonoG");
let nomMascotaG = document.getElementById("nomMascotaG");
let diasAlojamiento = document.getElementById("diasAlojamiento");
let razaG = document.getElementById("razaG");

// variables div Adiestramiento
let nombreA = document.getElementById("nombreA");
let telefonoA = document.getElementById("telefonoA");
let nomMascotaA = document.getElementById("nomMascotaA");
let edad = document.getElementById("edad");
let razaA = document.getElementById("razaA");

//tomo los botones enviar
let enviarA = document.getElementById("enviar");
let enviarP = document.getElementById("enviarP");
let enviarG = document.getElementById("enviarG");

//evento Click del boton enviar PASEO
enviarP.addEventListener("click", () => {
       
       if (nombreP.value.match(numeros) || nomMascotaP.value.match(numeros) || razaP.value.match(numeros) || diaP.value.match(numeros)) {

        Swal.fire({
            title: 'Error',
            text: 'Ah ingresado Numeros en campos de Texto',
            imageUrl: '/imagen/homero2.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
        nombreP.value = ""
        telefonoP.value = ""
        nomMascotaP.value = ""
        razaP.value = ""
        diaP.value = ""
        contenedorUno.classList.add("oculto")
        
    }


    else {

        if (nombreP.value == "" || telefonoP.value == "" || nomMascotaP.value == "" || diaP.value == "" || razaP.value == "") {

            Swal.fire({
                title: 'Error',
                text: 'Debe completar todos los datos',
                imageUrl: '/imagen/homero.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            })
            nombreP.value = ""
            telefonoP.value = ""
            nomMascotaP.value = ""
            razaP.value = ""
            diaP.value = ""
            contenedorUno.classList.add("oculto")
        } else
             
        {
            //validacion de los dias de paseo
            diaPaseo = diaP.value.toLocaleUpperCase();
            
            if  (diaPaseo!= "LUNES" && diaPaseo!="MARTES" && diaPaseo!="JUEVES" && diaPaseo !="VIERNES" && diaPaseo != "SABADO" && diaPaseo != "ESC"){
               
                Swal.fire({
                    title: 'Error en los dias de Paseo',
                    text: 'Debe elegir: Lunes, Martes, Jueves, Viernes o Sabado',
                    imageUrl: '/imagen/homero3.jpeg',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                })
                nombreP.value = ""
                telefonoP.value = ""
                nomMascotaP.value = ""
                razaP.value = ""
                diaP.value = ""
                contenedorUno.classList.add("oculto")    

            } else {
            mostrarDiv(res)
            datos.push(nombreP.value, telefonoP.value, nomMascotaP.value, razaP.value, diaP.value, id = "3")
            
            localStorage.setItem("usuario", JSON.stringify(datos));
            
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Su informacion ha sido guardada',
                showConfirmButton: false,
                timer: 1900
            })

            while (datos.length > 0) {
                datos.pop();
            }

            //cargo un resumen de los datos guardados en el STORAGE
            let ncargado = document.getElementById("nombreCargado");
            let telcargado = document.getElementById("telCargado")
            let nmascota = document.getElementById("nmc")
            let raza = document.getElementById("razaR")
            let costo = document.getElementById("costo")
            let almacenados = JSON.parse(localStorage.getItem("usuario"));
           
            ncargado.value = (almacenados[0])
            telcargado.value = (almacenados[1])
            nmascota.value = (almacenados[2])
            raza.value = (almacenados[3])
            costo.value = ("$1.000")

            nombreP.value = ""
            telefonoP.value = ""
            nomMascotaP.value = ""
            razaP.value = ""
            diaP.value = ""
            contenedorUno.classList.add("oculto")
        }
    }
}
})

//evento Click del boton enviar GUARDERIA
enviarG.addEventListener("click", () => {

    if (nombreG.value.match(numeros) || nomMascotaG.value.match(numeros) || razaG.value.match(numeros)) {

        Swal.fire({
            title: 'Error',
            text: 'Ah ingresado Numeros en campos de Texto',
            imageUrl: '/imagen/homero2.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
        nombreG.value = ""
        telefonoG.value = ""
        nomMascotaG.value = ""
        razaG.value = ""
        diasAlojamiento.value = ""
        contenedorDos.classList.add("oculto")
    }

    else {

    if (nombreG.value == "" || telefonoG.value == "" || nomMascotaG.value == "" || razaG.value == "" || diasAlojamiento.value == "") {

        Swal.fire({
            title: 'Error',
            text: 'Debe completar todos los Campos',
            imageUrl: '/imagen/homero.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
        nombreG.value = ""
        telefonoG.value = ""
        nomMascotaG.value = ""
        razaG.value = ""
        diasAlojamiento.value = ""
        contenedorDos.classList.add("oculto")

    } else {

        //con los If, calculo segun los dias de alojamiento, el valor total y pusheo segun ese valor

        if (diasAlojamiento.value > 1 && diasAlojamiento.value < 6) {
            datos.push(nombreG.value, telefonoG.value, nomMascotaG.value, diasAlojamiento.value * 900, razaG.value, id = "1")
            mostrarDiv(res)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Su Información ha sido guardada',
                showConfirmButton: false,
                timer: 1900
            })
        }
        if (diasAlojamiento.value > 5 && diasAlojamiento.value < 16) {
            datos.push(nombreG.value, telefonoG.value, nomMascotaG.value, diasAlojamiento.value * 800, razaG.value, id = "1")
            mostrarDiv(res)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Su Información ha sido guardada',
                showConfirmButton: false,
                timer: 1900
            })
        }
        if (diasAlojamiento.value > 16 && diasAlojamiento.value < 26) {
            datos.push(nombreG.value, telefonoG.value, nomMascotaG.value, diasAlojamiento.value * 700, razaG.value, id = "1")
            mostrarDiv(res)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Su Información ha sido guardada',
                showConfirmButton: false,
                timer: 1900
            })
        }

        if (diasAlojamiento.value > 26 || diasAlojamiento.value < 1) {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error en el Ingreso de los datos',

            })
        }
        validarCampo(nombreG.value);

        resumen.value = (datos)
        localStorage.setItem("usuario", JSON.stringify(datos));

        while (datos.length > 0) {
            datos.pop();
        }

        //cargo un resumen de los datos guardados en el STORAGE
        let ncargado = document.getElementById("nombreCargado");
        let telcargado = document.getElementById("telCargado")
        let nmascota = document.getElementById("nmc")
        let raza = document.getElementById("razaR")
        let costo = document.getElementById("costo")
        let almacenados = JSON.parse(localStorage.getItem("usuario"));
        ncargado.value = (almacenados[0])
        telcargado.value = (almacenados[1])
        nmascota.value = (almacenados[2])
        raza.value = (almacenados[4])
        costo.value = parseFloat(diasAlojamiento.value * 2500);
        nombreG.value = ""
        telefonoG.value = ""
        nomMascotaG.value = ""
        razaG.value = ""
        diasAlojamiento.value = ""
        contenedorDos.classList.add("oculto")
    }
}
})

////evento Click del boton enviar ADIESTRAMIENTO
enviarA.addEventListener("click", () => {
    
    if (nombreA.value.match(numeros) || nomMascotaA.value.match(numeros) || razaA.value.match(numeros) ) {

        Swal.fire({
            title: 'Error',
            text: 'Ah ingresado Numeros en campos de Texto',
            imageUrl: '/imagen/homero2.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
        nombreA.value = ""
        telefonoA.value = ""
        nomMascotaA.value = ""
        razaA.value = ""
        edad.value = ""
        contenedorTres.classList.remove("oculto")
    }


    else {

    if (nombreA.value == "" || telefonoA.value == "" || nomMascotaA.value == "" || edad.value == "" || razaA.value == "") {
        console.log(nombreA.value);
        Swal.fire({
            title: 'Error',
            text: 'Debe completar todos los Campos',
            imageUrl: '/imagen/homero.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
            nombreA.value = ""
        telefonoA.value = ""
        nomMascotaA.value = ""
        razaA.value = ""
        edad.value = ""
        contenedorTres.classList.add("oculto")
    } else {

        if (edad.value <1 || edad.value>17){
            console.log(edad.value);
            Swal.fire({
                title: 'Que edad tiene su mascota???',
                text: 'La edad debe ser entre 0 y 17 años',
                imageUrl: '/imagen/homero.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            })
            nombreA.value = ""
            telefonoA.value = ""
            nomMascotaA.value = ""
            razaA.value = ""
            edad.value = ""
            contenedorTres.classList.add("oculto")

        } else {



        datos.push(nombreA.value, telefonoA.value, nomMascotaA.value, edad.value, razaA.value, id = "2")
        resumen.value = (datos)
        mostrarDiv(res)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Su Información ha sido guardada',
            showConfirmButton: false,
            timer: 1900
        })
        localStorage.setItem("usuario", JSON.stringify(datos));
        while (datos.length > 0) {
            datos.pop();
        }

        //cargo un resumen de los datos guardados en el STORAGE
        let ncargado = document.getElementById("nombreCargado");
        let telcargado = document.getElementById("telCargado")
        let nmascota = document.getElementById("nmc")
        let raza = document.getElementById("razaR")
        let costo = document.getElementById("costo")
        let almacenados = JSON.parse(localStorage.getItem("usuario"));
        ncargado.value = (almacenados[0])
        telcargado.value = (almacenados[1])
        nmascota.value = (almacenados[2])
        raza.value = (almacenados[4])
        costo.value = "por dia -> $1.200/hora"
       

        nombreA.value = ""
        telefonoA.value = ""
        nomMascotaA.value = ""
        razaA.value = ""
        edad.value = ""
        contenedorTres.classList.add("oculto")

    }
}
    }

})


