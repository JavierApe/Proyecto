
//Opciones del servicio que se ofrece

let tipo =  parseInt ( prompt (" *-*-* BIENESTAR  PET *-*-* \n\n  Seleccione el Servicio que desea:  \n\n - Opción 1: Paseador de Perros \n  - Opción 2: Hospedaje de su mascota \n - Opción 3: Higiene y Limpieza \n\n -0- Salir" ));

//funcion para calcular el costo del alojamiento
function calcular (n1){

	return n1*1500;
}
	

while (isNaN(tipo) || tipo>3) {
	tipo = prompt ("Error, ah ingresado una opcion No válida, reintente. \n Les recordamos los servicios prestados: \n\n - Opción 1: Paseador de Perros \n  - Opción 2: Hospedaje de su mascota \n - Opción 3: Higiene y Limpieza \n\n -0- Salir\n Muchas gracias")
	
}
tipo = parseInt(tipo);
while (tipo == 1 || tipo == 2 || tipo == 3 || tipo ==0){
  
    switch (tipo){
				
		case 0:
				alert (" * Muchas gracias *");
				break;

        case 1:

					let nombre = prompt (" Ingrese Nombre o Apodo de la mascota");
					let edad = prompt ("Ingrese la edad de: " + nombre);
					while (isNaN(edad)) {
							edad = prompt ("Error, ah ingresado un caracter, debe ingresar un numero")
					}
					let raza = prompt ("Ingrese la Raza o Similar de su mascota: ");


            let dias = prompt ("*-*-* PASEO DE MASCOTAS *-*-*   \n \n Los dias que se realizan paseos son: \nLunes \nMiercoles \nViernes \nSabados *-*-* \ Seleecione el dia o escriba (ESC) para Salir");
            dias = dias.toLowerCase(dias);
						
						while (dias!="esc"){
							if (dias =="lunes"){
            		alert ("Su mascota " + nombre + " paseará el dia: "+ dias +"\n El paseador designado Joaquin se contactara para coordinar dicho paseo \n *-Muchas gracias *-" )
						break;
								
						}else{
						if (dias =="miercoles"){
							alert ("Su mascota " + nombre + " paseará el dia: "+ dias +"\n El paseador designado Joaquin se contactara para coordinar dicho paseo \n * Muchas gracias *" )
						break;
						}
					
					 else { 
						if (dias =="viernes"){
						alert ("Su mascota " + nombre + " paseará el dia: "+ dias +"\n El paseador designado Joaquin se contactara para coordinar dicho paseo \n * Muchas gracias *" )
						break;
					} 
					else {
						if (dias =="sabado"){
							alert ("Su mascota " + nombre + " paseará el dia: "+ dias +"\n El paseador designado Joaquin se contactara para coordinar dicho paseo \n *-Muchas gracias *-" )
							break;
					 } else 
					 dias = prompt ("*** ERROR *** \n\n No ah ingresado dia correcto, ni ESC para terminar, vuelva a intentar (recuerde, dias disponibles: Lunes, Miercoles, Viernes y Sábado) ");
					 dias = dias.toLowerCase(dias);

					}
				  }    						
					}
								
			}
		
		break;
        case 2:

					let nombre1 = prompt (" Ingrese Nombre o Apodo de la mascota");
					let edad1 = prompt ("Ingrese la edad de: " + nombre1);
					// valido que no sean caracteres
					while (isNaN(edad1)) {
							edad1 = prompt ("Error, ah ingresado un caracter, debe ingresar un numero")
					}
					let raza1 = prompt ("Ingrese la Raza o Similar de su mascota: ");

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
            alert (nombre1 + " se hospedará "+ diasHospedaje + " dias en nuestras instalaciones \n El costo del serivcio tiene un valor de: $" +costo + "\n \n Muchas gracias" );
			
				break;

        case 3:
            let higiene =  parseInt (prompt (" *-*-* HIGIENE Y LIMPIEZA *-*-*- \n \n SELECCIONE: \n 1) Baño \n 2) Corte de Pelo \n 3) Limpieza Dental \n 0) para salir"));

			let nombre2 = prompt (" Ingrese Nombre o Apodo de la mascota");
					let edad2 = prompt ("Ingrese la edad de: " + nombre2);
					// valido que no sean caracteres
					while (isNaN(edad2)) {
							edad2 = prompt ("Error, ah ingresado un caracter, debe ingresar un numero")
					}
					let raza2 = prompt ("Ingrese la Raza o Similar de su mascota: ");
                    
						while (higiene !=1 & higiene !=2 && higiene !=3  && higiene !=0) {
							higiene =   parseInt (prompt ("No ha seleccionado las opciones correctas, recuerde: \n1 - Baño \n 2 - Corte de Pelo \n 3 - Limpieza Dental \n 0 - para salir" ));
						}
               switch (higiene){
                    case 1:
                        alert (nombre2 + " Realizará un Baño con Shampoo especial para mascotas que dejara su pelo mas brillante que el mismisimo Sol en pleno Verano \n \n El Costo de dicho baño es de tan solo: $6.500\n Muchas gracias \n \n pd: donde se metio su mascota, tenia una roña!!" );
                        console.log ("BAÑO")
                     break;

                    case 2:
                        alert (nombre2+ " Va a tener un Corte de Pelo especializado, en el barrio lo llamaran el Ricky Martin de los "+ raza2 +"\n \n El costo del corte es de: $ 4.300 \n\n Muchas gracias");
                        console.log ("CORTE")
                        break;
                    case 3:
                        alert (nombre2 + " Recibira una limpeza dental de excelencia, sus dientes quedaran Perla Perla \n \n El valor del serivicio asciende a: $3.500 \n\n Muchas gracias ")
                        console.log ("DENTISTA")
                        break;
																			
                }
		
            break;
    					
					} 
    break; 
}
