import { LinkedList } from "./linkedlist";

class HashMap {
    constructor(size = 16) {
        this.hashmap = new Array(size);
        this.capacity = size;
    }

    hash(key) {
        let hashcode = 0;

        const primeNumber = 73;
        for (let i = 0; i < key.length; i++) {
            hashcode = primeNumber * hashcode + key.charCodeAt(i);
            hashcode = hashcode % this.capacity;
        }

        return hashcode;
    }

    set(key, value) {
        let hashIndex = this.hash(key);
        console.log(hashIndex);
        if (this.hashmap[this.hash(key)] != null) {
            console.log(`Collision, adding node`);
            let currNode = this.hashmap[this.hash(key)].head; // Initialize to head
            while (currNode) {
                if ((currNode.getValue()).includes(`${key}`)) {
                   currNode.setValue(`${key}, ${value}`);
                   return; 
                }
                currNode = currNode.nextNode;
            }
            console.log(`Adding node`);
            this.hashmap[this.hash(key)].append(`${key}, ${value}`);
        }
        else {
            console.log(`No collision, creating list`);
            this.hashmap[this.hash(key)] = new LinkedList();
            this.hashmap[this.hash(key)].append(`${key}, ${value}`);
        }
    }

    get(key) {
        let hashIndex = this.hash(key);
        console.log(`Get: ${key}, Hash: ${hashIndex}`);
        if (this.hashmap[hashIndex] != null) {
            let currNode = this.hashmap[hashIndex].head;
            while (currNode) {
                if ((currNode.getValue()).includes(`${key}`)) {
                    return currNode.getValue();
                }
                currNode = currNode.nextNode;
            }
        }
        return null;
    }

    getLength() {
        return this.hashmap.length;
    }
}

export { HashMap };