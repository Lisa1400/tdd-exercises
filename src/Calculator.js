function multiply() {
  let product = 1;
  
  for(let i = 0; i < arguments.length; i++){
    product *= parseFloat(arguments[i]);
  }
  return product;    
  }
  