// Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

function suma(a, b) {
    return a + b;
  }
  
  let resultado = suma(5, 8);
  
  console.log(resultado);  

  //A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

  function suma(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      alert("Error: Uno de los parámetros no es un número");
      return NaN;
    }
    return a + b;
  }

  let resultado1 = suma(5, 8);   
  console.log(resultado1);
  
  let resultado2 = suma(5, "x");  
  console.log(resultado2);

  //Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

  function validateInteger(num) {
    return Number.isInteger(num);
  }
  
  console.log(validateInteger(5));     
  console.log(validateInteger(5.5));   
  console.log(validateInteger("10"));

  // Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

  function validateInteger(num) {
    return Number.isInteger(num);
  }

  function suma(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      alert("Error: Uno de los parámetros no es un número");
      return NaN;
    }
    
    if (!validateInteger(a) || !validateInteger(b)) {
      alert("Error: Uno de los parámetros no es un número entero");
      return NaN;
    }
    
    return a + b;
  }