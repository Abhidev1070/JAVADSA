//// push method

// const arr = [1, 2, 3];
// const arr =["Oneplus","iphon","Sony","lumia","iphon","HTC Desire"]
// console.log(arr.push("Abhi"));
// console.log(arr.pop());
// console.log(arr.shift());
// console.log(arr.unshift());
// console.log(arr.splice(2,1));
// console.log(arr.slice(0,3));
// console.log(arr.indexOf("iphon"));
// console.log(arr.lastIndexOf("iphon"));
// console.log(arr.includes("iphon"));
// console.log(arr.sort());
// console.log(arr.toString());
// console.log(arr.join("."));
// console.log(arr.reduce(arr)); // * not andestending of reduce
// console.log(arr.toSpliced(1, 0, "Abhi"));
// console.log(arr.values(arr)); // not andestending of values 
// console.log(arr.with(2, "Abhi")); 
// let index = 2
// console.log(arr.at(2));
// console.log(arr.fill("Abhi"));
// console.log(arr.fill("Abhi",2));
// console.log(arr.fill("Abhi",0,2));
// console.log(arr.find()); // not andstend 


/////////////

class CustomArray {
    constructor() {
        this.data = {};     
        this.length = 0;    
    }

    // Get an item from our array
    get(index) {
        return this.data[index];
    }

    // Add an item to the end
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    // Remove the last item and return it
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    // Delete item at a specific index
    deleteAtIndex(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    // Shift items to the left from the specified index
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new CustomArray();
newArray.push(5);
newArray.push(10);
newArray.push(15);
console.log(newArray.get(1)); // Outputs: 10
newArray.deleteAtIndex(1);
console.log(newArray.get(1)); // Outputs: 15