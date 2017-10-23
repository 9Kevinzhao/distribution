//require all of the other files, with node.js,  linkedlist.js, and queue.js
const Queue = require('.queue.js');
const Product = require('./Product.js');
const Truck = require('./Truck.js')
function configureWareHouse(numberofitems){
    let Warehouse = new Queue();
    //fill the warehouse with new Products
    for(let x=0;x<numberofitems;x++){
        Warehouse.enqueue(new Product());
    }
    return warehouse;
}

function configureTruckFleet(numberoftrucks){
    let theFleet = new Queue();
    for (let i=0; i<numberoftrucks; i++){

    let r = Math.random();
    if(r>0.33){
      theFleet.enqueue(new Truck("small"));
    }
    else if(r>0.66){
      theFleet.enqueue(new Truck("medium"));
    }
    else{
      theFleet.enqueue(new Truck("large"));
    }
  }
    //fill the fleet with different sized trucks using math.random()
    return theFleet;
}
function distribute(wh,tf){
    //distribute the products in the warehouse to the truck fleet.
    let ready = new Queue()
    let currentTruck=tf.dequeue()
    while(!Warehouse.isEmpty && !theFleet.isEmpty){
      while(currentTruckspaceEfficiency()<1){
        currentTruck.inventory.push(wh.enqueue());
      }
      currentTruck.inventory.push(wh.dequeue());
    }
    ready.enqueue(currentTruck)
}
function ship(fleet,percent){
    //if the trucks spaceEfficency is greater than or equal to the percent, then remove the truck from the fleet's linked list
    for(let i=0; i<fleet.list.length; i++){
      if(fleet.list[i].spaceEfficency()>percent){
        fleet.dequeue();
      }
  }
}
function main(){
    let flemhouse = configureWareHouse();
    let flemfleet = configureTruckFleet();
    flemfleet = distribute(flemhouse,flemfleet);
    let shipping = ship(flemfleet,0.80);
    for(let s=0;s<shipping.length;s++){
        console.log("Truck "+s+" is in route");
        console.log("-----------------------");
        while(s.getNext() != null){
            console.log(shipping[s].getValue().spaceEfficiency());
        }
    }
}

main();
