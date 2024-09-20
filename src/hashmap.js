import { LinkedList } from "./linkedlist";

class HashMap {
    constructor(size = 16) {
        this.hashmap = new Array(size);
        this.capacity = size;
        this.size = 0;
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
            this.size++;
            this.hashmap[this.hash(key)].append(`${key}, ${value}`);
            return;
        }
        else {
            console.log(`No collision, creating list`);
            this.hashmap[this.hash(key)] = new LinkedList();
            this.size++;
            this.hashmap[this.hash(key)].append(`${key}, ${value}`);
            return;
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

    has(key) {
        let hashIndex = this.hash(key);
        console.log(`Has: ${key}, Hash: ${hashIndex}`);
        if (this.hashmap[hashIndex] != null) {
            let currNode = this.hashmap[hashIndex].head;
            while (currNode) {
                if ((currNode.getValue()).includes(`${key}`)) {
                    return true;
                }
                currNode = currNode.nextNode;
            }
        }
        return false;
    }

    remove(key) {
        let hashIndex = this.hash(key);
        console.log(`Remove: ${key}, Hash: ${hashIndex}`);
        if (this.hashmap[hashIndex] != null) {
            if (this.hashmap[hashIndex].size === 1) {
                this.hashmap[hashIndex] = new LinkedList();
                this.size--;
                return true;
            }
            this.size--;
            return this.hashmap[hashIndex].remove(this.get(key));
        }
    }

    length() {
        return this.size;
    }

    clear() {
        this.hashmap = new Array(16);
        this.capacity = 16;
        this.size = 0;
    }

    getLength() {
        return this.hashmap.length;
    }
}

export { HashMap };