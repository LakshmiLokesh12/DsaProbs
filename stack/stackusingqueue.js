//////Queue using stack/////////

class QueueUsingStack{
    constructor()
    {
        this.s1 = [];
        this.s2 =[];
    }
    
    enQueue(ele)
    {
        while(this.s1.length != 0){
            this.s2.push(this.s1.pop());
        }
        
        this.s1.push(ele);
        
        while(this.s2.length != 0)
        {
            this.s1.push(this.s2.pop());
        }
    }
    
    deQueue()
    {
        if(this.s1.length == 0)
        {
            console.log("Queue is Empty");
        }
        
        let val = this.s1[this.s1.length -1];
        this.s1.pop();
        return val;
    }
}

    let myQueueUsingStack  = new QueueUsingStack();
    myQueueUsingStack.enQueue(45);
    myQueueUsingStack.enQueue(75);
    myQueueUsingStack.deQueue();
    myQueueUsingStack.enQueue(65);
    myQueueUsingStack.enQueue(35);
////STACK USING QUEUE////////////////
class CustomStack{
constructor() {
    this.q1 = [];
    this.q2 = [];
    };
push(elem) {
   if(this.q1.length > 0) {
   this.q1.push(elem);
   } else {
   this.q2.push(elem);
   }
};
pop() {
   if(this.q1.length === 0 && this.q2.length === 0)
   return null;
   if(this.q1.length > 0) {
    while(this.q1.length > 1) {
    var elem = this.q1.shift();
    this.q2.push(elem);
    }
   return this.q1.shift();
   } else {
     while(this.q2.length > 1) {
     var elem = this.q2.shift();
     this.q1.push(elem);
     }
    return this.q2.shift();
   }
};
top(){
   if(this.q1.length === 0 && this.q2.length === 0)
   return null;
   if(this.q1.length > 0) {
     var elem = this.pop();
     this.q2.push(elem);
     return elem;
    } else {
        var elem = this.pop();
        this.q1.push(elem);
        return elem;
        }
};

empty(){
   return this.q1.length == 0 && this.q2.length === 0;
};
}
let s = new CustomStack();
s.push(1);
s.push(2);
s.push(3);