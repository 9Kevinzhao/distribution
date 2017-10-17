const Product = functions(){
  let Name = CreateName();
  let Price = CreateRandomNumber();
  let Space= CreateRandomNumber();
  let Prime = CreatePrime;

  function CreateName(){
    for(let i=0;i<5;i++){
    let c = Math.floor(25*Math.random())+65;
    let letter = String.fromCharCode(c)
    Name += letter;
  }
  return Name;
  }

  function CreateRandomNumber(){
    Price=Math.floor(Math.random()*10000)/100);
    Space=Math.floor(Math.random()*10000)/100);

  }

  function CreatePrime(){
    if(Math.random()>0.5){
      Prime = true;
    }
    else{
      Prime = false;
    }
  }
}
