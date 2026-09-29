// Ejercicio : El mostrador - VERSION DE REFERENCIA

//----- PASO 1 Y 2 FUNCIONES NORMALES ------
function calcularTotal(precio, cantidad = 1){
    return precio * cantidad;

}

function esPedidoValido(cantidad){
    return cantidad<0;
}

function FormatearPrecio(monto){
    return "$" + monto.toFixed(2);
}

console.log("paso 1 y 2");
console.log(calcularTotal(35,2));
console.log(calcularTotal(35));
console.log(esPedidoValido(0));
console.log(FormatearPrecio(35));

//  PASO 3 LAS MISMAS FUNCIONES EN FLECHA CORTA 
const calcularTotal2 = (precio, cantidad=1) => precio * cantidad;
const esPedidoValido2 = (cantidad) => cantidad > 0;
const FormatearPrecio2 = (monto) => "$" + monto.toFixed(2);

console.log(" paso 3 ")
console.log(calcularTotal2(35,2), esPedidoValido2(0), FormatearPrecio2(35));