/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   return nombre.slice (0, 1).toUpperCase () + nombre.slice[1];
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // T,u código:
  return cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
    return cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:

   //Necesitamos una variable que guarde esa suma:
   let suma = 0;

   for (let i = 0; i < arrayOfNumbers.length; i++) {
      //Cada posicion se pone entre corchetes. Le decimos
      //la posición en la que queremos que nos devuelva el valor:
      suma += arrayOfNumbers[i]; //En este caso le decimos "i", que es nuestro iterador
      //Que básicamente es igual a 0. Poner "i" es lo mismo que poner 0. (?) 

      //Poniendo += le deicmos a JS que el valor que recibe en Array, lo sume al valor de
      //la variable suma. En este caso.

   } //Ahora debemos pasarle el resultado a la cb, como argumento. (La cb en este caso es una
   //funcion que no sabemos lo que hace. Y le pasamos esta función como argumento. O sea el 
   //Resultado de la suma. (REPASAR CALLBACKS)
   cb(suma);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:

   //Debemos inventar la variable que vamos a utilizar para iterar en este
   // elemento. En este caso se llamará "val" (De valor).
   //No podemos usar const, porque sabemos que por defecto es algo que no se
   // puede mdificiar. Por eso uso let. 
   //Y el array que hay que iterar se llama array.
   for (let val of array) {
      //Lo que hace este método es: Por cada iteración nos devolverá el
      //valor que tenga en la posición de ese array, en val. 
      //Entonces por cada iteración, le pasamos a la cb, el valor que nos retorne.
      cb(val);
   }
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:


   let ejercicioMap = [];

   //i++ . que en cada iteración sume uno.
   for (let i = 0; i < array.length; i++) {
      ejercicioMap.push ( cb (array[i])); 
     }
     return ejercicioMap;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   //El método filter lo que hace: En un arreglo, filtra a través de una condición
   // dada por argumento en una callback. 
   //Este crea un nuevo array y te lo devuelve.

   let tareaFilter= []; 
   for (let i = 0; i < arrayOfStrings.length; i++) {
      //Para saber si la primer letra de cada elemento comienza con A, creamos 
      //una condición con IF.
      //Y le decimos: Si arrayOfStrings, en su posición cero (.at(0)) es igual === a "a"
      if(arrayOfStrings[i].at (0)=== "a") {
         tareaFilter.push(arrayOfStrings[i]);
      }
   }

   return tareaFilter
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
