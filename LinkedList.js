Const Node=require('./node.js');

Const LinkedList = function(){
  let root=new Node(undefined);
  let length = 0;
  let here = root;
  let lastnode=root

  function has(node){
    let start = root;
    for (let i=0;r<length;r++){
      if(start.getValue()==Node.getValue()){
        return true;
      }
      else{
        start=start.getNext();
      }
      return flase
    }
  }
  function add(Node){
    lastnode.setNext(Node);
    lastnode=node;
  }
  function remove(Node){
    let temp=new Node(undefined);
    let start=root;
    let last;
    while(start.getValue()!==node.getValue()){
      last=start;
      start=start.getNext();
    }
    temp.setValue(start.getNext.getValue);
    temp.setNext(start.getNext.getNext);
    last.SetNext(temp)
  }

    function addIn(Node,here){
      let next=New Node(undefined);
      let n1=here.getNext().getValue();
      let n2=here.getNext().getNext();
      next.setValue(n1);
      next.SetNext(n2);
      node.SetNext(next);
      length++;
    }

    function getNext(){
      return here.getNext();
    }
}
