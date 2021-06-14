class Stack{

    constructor(){
        this.data = [];
        this.top = 0;
    }

    push(element){
        this.data[this.top] = element;
        this.top++;
    }

    peek(){
        if(!this.isEmpty()){
            return this.data[this.top - 1];
        } 
    }

    pop(){
        if(!this.isEmpty()){
            let data = this.data[this.top - 1];
            this.top--;
            return data;
        }
    }

    length(){
        return this.top;
    }

    isEmpty(){
        return this.top === 0;
    }

    *iterate(){
        let index = this.top - 1;
        while(index >= 0){
            yield this.data[index];
            index--;
        }
    }

    reverse(){
        let index = this.top - 1;
        return this._reverse(index);
        
    }

    *_reverse(index){
        if(index != 0){
            yield* this._reverse(index - 1);
        } 
        yield this.data[index];
        
    }
}

let stack =  new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();

for (const item of stack.iterate()) {
    console.log(item);
}
for (const item of stack.reverse()) {
    console.log(item)
}
