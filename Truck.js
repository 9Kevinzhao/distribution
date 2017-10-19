Const Node=require('./node.js');
Const LinkedList=require('./LinkedList.js');
const Truck = function(size){
    let type = size;
    let inventory = new LinkedList();
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
        let node = inventory.getNode(x);
        sum += node.getValue.space;
      }
    }

}
