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
        if (this.hashmap[this.hash(key)] != null) {
            console.log(`Collision, adding node`);
            this.hashmap[this.hash(key)].append(`${key}, ${value}`);
        }
        else {
            console.log(`No collision, creating list`);
            this.hashmap[this.hash(key)] = new LinkedList();
            this.hashmap[this.hash(key)].append(`${key}, ${value}`);
        }
        // this.hashmap[this.hash(key)] = `${key}, ${value}`;
    }

    getLength() {
        return this.hashmap.length;
    }
}

export { HashMap };