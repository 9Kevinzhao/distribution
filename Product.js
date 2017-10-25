const Product = function(){
  let Name = CreateName();
  let Price = CreateRandomNumber();
  let Space= CreateRandomNumber();
  let Prime = CreatePrime();

  function CreateName(){
    let word="";
    for(let i=0;i<5;i++){
    let c = Math.floor(25*Math.random())+65;
    let letter = String.fromCharCode(c)
    word += letter;
  }
  return word;
  }

  function CreateRandomNumber(){
    let n =Math.floor(Math.random()*10000/100);
    return n;
  }

  function CreatePrime(){
    if(Math.random()>0.5){
      return true;
    }
    else{
      return false;
    }
  }
}
