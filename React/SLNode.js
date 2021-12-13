class SLNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class SLList{
    constructor(){
        this.head = null;
    }

    addToFront(value) {
        //your code here
        var newNode = new SLNode(value);

        newNode.next = this.head;

        this.head = newNode;
        
        return this;
    }
    addToBack(value) {
        //your code here
        if(this.head == null){
            return this.addToFront(value);
        }
        var newNode = new SLNode(value);
        var runner = this.head;

        while(runner.next != null){
            runner = runner.next;
        }

        runner.next = newNode;

        return this;
    }
    contains(value){
        var runner = this.head;
        while(runner != null){
            if(runner.value == value){
                return true;
            }
            runner = runner. next;
        }
            return false;
    }
}

var newList = new SLList();

newList.addToBack(5).addToBack(1).addToFront(3);
console.log(newList);

var contains5 = newList.contains(5);
var contains5Expected = true;
console.log(contains5 == contains5Expected);
