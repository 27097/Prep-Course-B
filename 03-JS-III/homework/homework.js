// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var pipi = [1, 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ,10]
    var suma = 0
    for(let i = 0; i <pipi.length; i++){
      
      suma = suma + pipi[i]
    }
  return suma;  
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var pares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i]%2===0) {
            pares.push(array[i])
        }
        
    }
    return pares;
    
    
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  
  // var cuadrado=[]

  //   for (let i = 0; i < array.length; i++) {
  //       // cuadrado.push(array[i]**2)
  //       cuadrado.push(Math.pow(array[i],2))
        
  //   }
  
  //   return cuadrado;
// ----------------------------------------------------
return array.map(function (num) {
  return Math.pow(num, 2);
});




}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  // var suma= 0;
  // for (let i = 0; i < array.length; i++) {
  //     suma = suma + array[i]
      
  // }
  // return suma;
  // ------------------------------------
  var result = array.reduce(function (acumulador,num){
           return acumulador + num
  },0)
  return result
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  // 100 -> 3
  // 10+a -> 10a
  // 100 + "" -> "100"

  //  var numString = num + "";
  // return numString.length; 
// -------------------------------------var numString = num + "a";
  return numString.length-1; 
  
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
