import { LinkedList } from "./linkedlist";

class HashMap {
    constructor(size = 16) {
        this.hashmap = new Array(size);
        this.capacity = size;
        this.loadFactor = 0.75;
        this.size = 0;
    }

    hash(key) {
        let hashcode = 0;
        
        const primeNumber = 73;
        for (let i = 0; i < key.length; i++) {
            hashcode = primeNumber * hashcode + key.charCodeAt(i);
            hashcode = hashcode % this.capacity;
        }
        // console.log(`Key: ${key}, Hash: ${hashcode}`);
        return hashcode;
    }

    set(key, value) {
        let hashIndex = this.hash(key);
        // console.log(hashIndex);
        if (this.hashmap[this.hash(key)] != null) {
            // console.log(`Collision, adding node`);
            let currNode = this.hashmap[this.hash(key)].head; // Initialize to head
            while (currNode) {
                if ((currNode.getValue()).includes(`${key}`)) {
                   currNode.setValue(`${key}, ${value}`);
                   return; 
                }
                currNode = currNode.nextNode;
            }
            // console.log(`Adding node`);
            this.size++;
            this.hashmap[this.hash(key)].append(`${key}, ${value}`);
            // console.log(`Current size * load factor: ${this.loadFactor * this.size} `);
            if ((this.size) >= (this.loadFactor * this.capacity)) {
                console.log(`Expanding hashmap`);
                const newHashmap = new HashMap(this.capacity * 2);
                console.log(`Current capacity: ${this.capacity}`)
                this.capacity = this.capacity * 2;
                console.log(`New capacity: ${this.capacity}`)
                this.hashmap.forEach((list) => {
                    if (typeof list !== 'undefined') {
                        let currNode = list.head
                        while (currNode) {
                            let currElement = currNode.value.split(', ');
                            let currKey = currElement[0];
                            let currValue = currElement[1];
                            // console.log(currKey);
                            // console.log(currValue);
                            newHashmap.set(currKey, currValue);
                            currNode = currNode.nextNode;
                        };
                    };
                });
                this.hashmap = newHashmap.hashmap;
            }
            return;
        }
        else {
            console.log(`No collision, creating list`);
            this.hashmap[this.hash(key)] = new LinkedList();
            this.size++;
            this.hashmap[this.hash(key)].append(`${key}, ${value}`);
            // console.log(`Current size * load factor: ${this.loadFactor * this.size} `);
            if ((this.size) >= (this.loadFactor * this.capacity)) {
                console.log(`Expanding hashmap`);
                const newHashmap = new HashMap(this.capacity * 2);
                console.log(`Current capacity: ${this.capacity}`)
                this.capacity = this.capacity * 2;
                console.log(`New capacity: ${this.capacity}`)
                this.hashmap.forEach((list) => {
                    if (typeof list !== 'undefined') {
                        let currNode = list.head
                        while (currNode) {
                            let currElement = currNode.value.split(', ');
                            let currKey = currElement[0];
                            let currValue = currElement[1];
                            // console.log(currKey);
                            // console.log(currValue);
                            newHashmap.set(currKey, currValue);
                            currNode = currNode.nextNode;
                        };
                    };
                });
                this.hashmap = newHashmap.hashmap;
            }
            return;
        }
    }

    get(key) {
        let hashIndex = this.hash(key);
        // console.log(`Get: ${key}, Hash: ${hashIndex}`);
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
        // console.log(`Has: ${key}, Hash: ${hashIndex}`);
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
        // console.log(`Remove: ${key}, Hash: ${hashIndex}`);
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

    keys() {
        let returnArray = new Array();
        for (let i = 0; i < this.capacity; i++) {
            if (this.hashmap[i] !== null && typeof this.hashmap[i] !== 'undefined') {
                console.log(this.hashmap[i]);
                let currNode = this.hashmap[i].head;
                while (currNode) {
                    console.log(currNode.value.substr(0, currNode.value.indexOf(`,`)));
                    returnArray.push(currNode.value.substr(0, currNode.value.indexOf(`,`)));
                    currNode = currNode.nextNode;
                }
                return returnArray;
            }
            else {
                // console.log(`Keys Null`);
            }
        }
    }

    values() {
        let returnArray = new Array();
        for (let i = 0; i < this.capacity; i++) {
            if (this.hashmap[i] !== null && typeof this.hashmap[i] !== 'undefined') {
                console.log(this.hashmap[i]);
                let currNode = this.hashmap[i].head;
                while (currNode) {
                    console.log(currNode.value.substr(currNode.value.indexOf(`,`) + 2));
                    returnArray.push(currNode.value.substr(currNode.value.indexOf(`,`) + 2));
                    currNode = currNode.nextNode;
                }
                return returnArray;
            }
            else {
                // console.log(`Values Null`);
            }
        }
    }

    entries() {
        let returnArray = new Array();
        for (let i = 0; i < this.capacity; i++) {
            if (this.hashmap[i] !== null && typeof this.hashmap[i] !== 'undefined') {
                // console.log(`Entries: ${this.hashmap[i]}`);
                let currNode = this.hashmap[i].head;
                while (currNode) {
                    // console.log(`Entries: ${currNode.value}`);
                    returnArray.push(currNode.value);
                    currNode = currNode.nextNode;
                }
            }
            else {
                // console.log(`Null entry, skipping.`);
            }
        }
        return returnArray;
    }

    getLength() {
        return this.hashmap.length;
    }
}

export { HashMap };