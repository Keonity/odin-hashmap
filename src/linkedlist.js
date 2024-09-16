import { Node } from './node';

class LinkedList {
    constructor() {
        this.head = new Node(`Head`, null);
        this.tail = this.head;
        this.size = 0;
    }

    prepend(value) {
        console.log(`Prepending: ` + this.size);
        if (this.size === 0) {
            this.head.setValue(value);
            this.tail = this.head;
        }
        else {
            let newHead = new Node(value, this.head);
            this.head = newHead;
        }
        this.size = this.size + 1;
    }

    append(value) {
        // console.log(`Appending: ` + this.size);
        if (this.size === 0) {
            this.head.setValue(value);
            this.tail = this.head;
        }
        else {
            let newTail = new Node(value, null);
            let currTail = this.tail;
            currTail.setNext(newTail);
    
            this.tail = newTail;
        }
        this.size = this.size + 1;
    }

    get size() {
        return this._size;
    }

    set size(value) {
        this._size = value;
    }

    get head() {
        return this._head;
    }

    set head(value) {
        this._head = value;
    }

    get tail() {
        return this._tail;
    }

    set tail(value) {
        this._tail = value;
    }

    at(index) {
        let currNode = this.head;
        let currIndex = 0;
        console.log(`currIndex: ` + currIndex);
        while (currIndex !== index) {
            console.log(`currNode: ` + currNode);
            currNode = currNode.nextNode;
            currIndex++;
        }

        return currNode;
    }

    pop() {
        let returnNode = this.tail;

        let newTail = this.at(this.size - 2);
        newTail.print();
        if (newTail.nextNode) {
            newTail.setNext(null);
        }
        this.size = this.size - 1;

        return returnNode;
    }

    contains(value) {
        let currNode = this.head;
        while (currNode) {
            if (currNode.value === value) {
                return true;
            }
            currNode = currNode.nextNode;
        }

        return false;
    }

    find(value) {
        let currNode = this.head;
        let currIndex = 0;
        while (currNode) {
            if (currNode.value === value) {
                return currIndex;
            }
            currNode = currNode.nextNode;
            currIndex++;
        }

        return null; 
    }

    toString() {
        let listString = '';
        let currNode = this.head;
        let currIndex = 0;
        while (currNode) {
            listString += `( `;
            listString += currNode.getValue();
            listString += ` )`;
            if (currIndex <= this.size - 2) {
                listString += ` -> `;
            }
            currIndex++;
            currNode = currNode.nextNode;
        } 

        console.log(listString);
    }

}

export { LinkedList }