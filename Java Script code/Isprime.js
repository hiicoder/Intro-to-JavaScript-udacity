function isPrime(integer){
  for(var x = 2;x<integer;x++){
    if(integer % x === 0){
      console.log("Not a prime");
      return false;
    }
  }
  return true;
}
