function outerFunction(outerValue) {
    // A função interna (closure) tem acesso à variável outerValue
    function innerFunction(innerValue) {
      console.log(outerValue + innerValue);
    }
  
    // Retorna a função interna
    return innerFunction;
  }
  
  // Criando uma closure
  const closureInstance = outerFunction(10);
  
  // Usando a closure
  closureInstance(5); // Saída: 15
  