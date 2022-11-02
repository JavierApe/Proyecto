const traidoDelStorage = localStorage.getItem("usuario");
const jsonAobjeto = JSON.parse(traidoDelStorage);

jsonAobjeto[5] = parseInt(jsonAobjeto[5])
console.log(jsonAobjeto[5])


switch (jsonAobjeto[5]) {
    case 1:
        Swal.fire('HOLA, Le recordamos que el ultimo registro fue de ALOJAMIENTO')
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
})
botonDos.addEventListener("click", () => {
    mostrarDiv(contenedorDos);
})
botonTres.addEventListener("click", () => {
    mostrarDiv(contenedorTres);
})

function mostrarDiv(div) {
    if (div.classList.contains("oculto")) {
        div.classList.remove("oculto");//Muestra el div
    } else {
        div.classList.add("oculto");
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
    datos.push(nombreP.value, telefonoP.value, nomMascotaP.value, razaP.value, diaP.value, id = "3")
    //resumen.value = (datos)
    
    localStorage.setItem("usuario", JSON.stringify(datos));

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
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
    let almacenados = JSON.parse(localStorage.getItem("usuario"));
    //console.log (almacenados)
    //console.log (almacenados.length)
    ncargado.value= (almacenados[0])
    telcargado.value =(almacenados[1])
    nmascota.value =(almacenados[2])
    raza.value = (almacenados[3])
   


    nombreP.value = ""
    telefonoP.value = ""
    nomMascotaP.value = ""
    razaP.value = ""
    diaP.value = ""

})




//evento Click del boton enviar GUARDERIA
enviarG.addEventListener("click", () => {

    //con el If, calculo segun los dias de alojamiento, el valor total y pusheo segun ese valor

    if (diasAlojamiento.value > 1 && diasAlojamiento.value < 6) {
        datos.push(nombreG.value, telefonoG.value, nomMascotaG.value, diasAlojamiento.value * 900, razaG.value, id = "1")
        console.log(datos)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1900
        })
    }
    if (diasAlojamiento.value > 5 && diasAlojamiento.value < 16) {
        datos.push(nombreG.value, telefonoG.value, nomMascotaG.value, diasAlojamiento.value * 800, razaG.value, id = "1")
        console.log(datos)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1900
        })
    }
    if (diasAlojamiento.value > 16 && diasAlojamiento.value < 26) {
        datos.push(nombreG.value, telefonoG.value, nomMascotaG.value, diasAlojamiento.value * 700, razaG.value, id = "1")
        console.log(datos);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1900
        })

    }

    if (diasAlojamiento.value > 26 || diasAlojamiento.value < 1) {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error en el Ingreso de los dias. Ingrese entre 1 y 25',
            
        })

    }
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
    let almacenados = JSON.parse(localStorage.getItem("usuario"));
    console.log (almacenados)
    //console.log (almacenados.length)
    ncargado.value= (almacenados[0])
    telcargado.value =(almacenados[1])
    nmascota.value =(almacenados[2])
    raza.value = (almacenados[4])


    nombreG.value = ""
    telefonoG.value = ""
    nomMascotaG.value = ""
    razaG.value = ""
    diasAlojamiento.value = ""
})

////evento Click del boton enviar ADIESTRAMIENTO
enviarA.addEventListener("click", () => {

     datos.push(nombreA.value, telefonoA.value, nomMascotaA.value, edad.value, razaA.value, id = "2")
    resumen.value = (datos)
    console.log(resumen.value)
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
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
    let almacenados = JSON.parse(localStorage.getItem("usuario"));
    //console.log (almacenados)
    //console.log (almacenados.length)
    ncargado.value= (almacenados[0])
    telcargado.value =(almacenados[1])
    nmascota.value =(almacenados[2])
    raza.value = (almacenados[4])



    nombreA.value = ""
    telefonoA.value = ""
    nomMascotaA.value = ""
    razaA.value = ""
    edad.value = ""
})


