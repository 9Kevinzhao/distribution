
const Queue = require('.queue.js');
const Product = require('./Product.js')
const Truck = function(size){
    let type = size;
    let inventory = [];
    let capacity = setCapacity(size);

    function setCapacity(){
      type = type.toLowercase();
      if(type="small"){
        return 1000;
      }
      if(type="medium"){
        return 2000;
      }
      if(type="large"){
        return 5000;
      }
    }

    function spaceEfficency(){
      let sum = 0;
      let len = inventory.length;
      for(let x=0;x<len; x++){
        sum += inventory[x].space;
      }
      return sum/capacity
    }

}
