//Opciones del servicio que se ofrece

let tipo =  parseInt ( prompt (" *-*-* MASCOTEANDO *-*-* \n\n  Seleccione el Servicio que desea:  \n\n - Opción 1: Paseador de Perros \n  - Opción 2: Hospedaje de su mascota \n - Opción 3: Higiene y Limpieza \n\n -0- Salir" ));

//funcion para calcular el costo del alojamiento
function calcular (n1){
	return n1*1500;
}


const diasPaseo=[
    {
        dia:"LUNES",
        paseador:"Joaquin",
        lugar:"Plaza Italia",
        tiempo: "1.30hs",
		precio: " $ 1300",
    },
    {
        dia:"MARTES",
        paseador:"Lautaro",
        lugar:"Plaza Serrano",
        tiempo: "1.40hs",
	precio: " $ 1900",
    },
    {
		dia:"JUEVES",
        paseador:"Matias",
        lugar:"Puerto Madero",
        tiempo: "1.25hs",
	precio: " $ 1800",
    },
    {
        dia:"VIERNES",
        paseador:"Ivana",
        lugar:"Plaza Lezama",
        tiempo: "1.25hs",
		precio: " $ 1500",
    },
	{
        dia:"SABADO",
        paseador:"Martin",
        lugar:"Plaza Congreso",
        tiempo: "1.35hs",
	precio: " $ 2100",
    },
];

//Valido que las opciones sean las que se pueden elegir

while (isNaN(tipo) || tipo>3) {
	tipo = prompt ("Error, ah ingresado una opcion No válida, reintente. \n Les recordamos los servicios prestados: \n\n - Opción 1: Paseador de Perros \n  - Opción 2: Hospedaje de su mascota \n - Opción 3: Higiene y Limpieza \n\n -0- Salir\n Muchas gracias")
}

tipo = parseInt(tipo);

if (tipo == 1 || tipo == 2 || tipo == 3 ){

//voy preguntando y cargando los datos de la mascota en un array con el metodo PUSH

const datosMascota = [];
if (tipo !=0){

	    datosMascota.push(prompt("Ingrese Nombre de Su Mascota"))
		datosMascota[0] = datosMascota[0].toLocaleUpperCase()
		
		let edad = (prompt(" Ingrese la edad de: "+ datosMascota[0]));
		while (isNaN(edad)) {
							edad = prompt ("Error, ah ingresado un caracter, debe ingresar un numero")
							}
		while (edad>15 || (isNaN(edad))){
			edad = prompt ("Error, no puede tener "+edad+ " años su mascota (menos de 15), o colocaste un caracter en la edad - Reingresa bien la edad please..")
		}
		datosMascota.push(edad)
		datosMascota.push(prompt("Ingrese la Raza o Similar de Su Mascota "))
	}		
	   	
switch (tipo){
		
	case 1:
					
            let dias = prompt ("*-*-* PASEO DE MASCOTAS *-*-*    \n Escriba el dia que desea: \n Los dias que se realizan paseos son: \nLunes \nMartes \nJueves \nViernes \nSabados \n - esc - para Salir *-*-* ");
            dias = dias.toLocaleUpperCase();
			
			while (dias!= "LUNES" && dias!="MARTES" && dias!="JUEVES" && dias !="VIERNES" && dias != "SABADO" && dias != "ESC"){
				console.log (dias)
				dias = prompt ("*** ERROR *** \n\n No ah ingresado dia correcto, ni ESC para terminar, vuelva a intentar (recuerde, dias disponibles: Lunes, Martes, Jueves, Viernes y Sábado) ");
				dias = dias.toLocaleUpperCase();
				console.log (dias +"  * prueba")
			}
			
			if (dias === "ESC"){
				alert ("MuchasSSSS gracias ")
				break;	
			}
						
				//Funcion Sup Find para mostrar los datos del Dia de paseo

				const encontrado = diasPaseo.find((diasP) =>diasP.dia === dias);
				alert ("Su mascota: " + datosMascota[0] + " Paseara el dia: " + encontrado.dia + "\n el Paseador sera: "+ encontrado.paseador + "\n Dicho paseo se realizará por: "+ encontrado.lugar +"\n El costo del paseo, asciende a: " + encontrado.precio + "\n * Muchas gracias *" )

				//console.log (encontrado);
				
			break;
			 
        case 2:
				
            let diasHospedaje = parseInt ( prompt ("*-*-*- HOSPEDAJE DE MASCOTAS *-*-*- \n \nCuantos dias desea Hospedar a su mascota? - (1 a 30 dias)"))

						while (isNaN(diasHospedaje)) {
							diasHospedaje = prompt ("Usted ah ingresado un caracter, debe ingresar un numero")
					}
						while (diasHospedaje >30 || diasHospedaje < 0){
						 diasHospedaje = parseInt (prompt ("Error en el ingreso, debe ingresar un numero entre 0 y 30 "));
								}
							
							// valido que no sean caracteres

							while (isNaN(diasHospedaje)) {
									diasHospedaje = prompt ("Error, ah ingresado un caracter, debe ingresar un numero")
							}
            
							//llamado a la funcion para calcular el hospedaje

							let costo = calcular(diasHospedaje);

            alert (datosMascota[0] + " se hospedará "+ diasHospedaje + " dias en nuestras instalaciones \n El costo del serivcio tiene un valor de: $" +costo + "\n \n Muchas gracias" );
			
				break;

        case 3:
            let higiene =  parseInt (prompt (" *-*-* HIGIENE Y LIMPIEZA *-*-*- \n \n SELECCIONE: \n 1) Baño \n 2) Corte de Pelo \n 3) Limpieza Dental \n 0) para salir"));


						while (higiene !=1 & higiene !=2 && higiene !=3  && higiene !=0) {
							higiene =   parseInt (prompt ("No ha seleccionado las opciones correctas, recuerde: \n1 - Baño \n 2 - Corte de Pelo \n 3 - Limpieza Dental \n 0 - para salir" ));
						}
               switch (higiene){
                    case 1:
                        alert (datosMascota[0] + " Realizará un Baño con Shampoo especial para mascotas que dejara su pelo mas brilloso que la melena de Brad Pitt \n \n El Costo de dicho baño es de tan solo: $6.500\n Muchas gracias \n \n pd: donde se metio su mascota, tenia una roña!!" );
                        console.log ("BAÑO")
                     break;

                    case 2:
                        alert (datosMascota[0]+ " Va a tener un Corte de Pelo especializado, en el barrio lo llamaran el Ricky Martin de los "+ datosMascota[2] +"\n \n El costo del corte es de: $ 4.300 \n\n Muchas gracias");
                        console.log ("CORTE")
                        break;
                    case 3:
                        alert (datosMascota[0] + " Recibira una limpeza dental de excelencia, sus dientes quedaran Perla Perla \n \n El valor del servicio asciende a: $3.500 \n\n Muchas gracias ")
                        console.log ("DENTISTA")
                        break;
																			
                			}
		            break;
		
					} 
		
} else {
	if (tipo == 0){
		alert ("MUCHAS GRACIAS !!!")
	}
}			
