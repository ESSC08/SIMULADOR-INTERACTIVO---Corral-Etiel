// - Función que calcula y devuelve el porcentaje de aumento de un producto  
//   desde un determinado año hasta otro 
// - Se le pasa como parametros el nombre del producto,el precio inicial y 
//   el precio final
// - La funcion llama a otra funcion que calcule el porcentaje
// - Finalmente devuelve un string que nos dice cuanto aumento el producto


const calcularDaño = (nombreTipo,dañoInicial,dañoFinal) => {
        
	const porcentaje = calcularPorcentaje(dañoInicial, dañoFinal);
    
	return "El daño " + nombreTipo + " aumentó un " + porcentaje;
}


const calcularPorcentaje = (dañoInicial,dañoFinal) => {

		return Math.ceil((dañoFinal*100)/dañoInicial) + "% ";	
}

const aumentoDañoFuego = calcularDaño("Fuego",50,200)

console.log(aumentoDañoFuego)

const aumentoDañoHierba = calcularDaño("Hierba",30,60)

console.log(aumentoDañoHierba)