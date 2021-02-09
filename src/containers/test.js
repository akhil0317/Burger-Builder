class Node{

constructor(data){
this.data = data;
this.next = null;
}

}


class LinkedList{

constructor(){
this.head = null;
this.length = 0;
}

insertElement(ele){
var node = new Node(ele)
if(this.head===null){
this.head = node;
}
else{
var curr = this.head;
var repeated = false;
console.log("curr is",curr.next);
while(curr.next!=null){
if(curr.data===ele)
repeated=true;
curr = curr.next;
}
if(repeated===false)
curr.next = node;
}

}

displayElements(){
var res = "";
var curr = this.head;
while(curr.next!=null)
res = res+curr.data;
console.log(res);
}
}

var len = 5;
var arr = [2,3,4,2,3];
var ll = new LinkedList();
for(var i=0;i<len;i++){
ll.insertElement(arr[i])
}
ll.displayElements();