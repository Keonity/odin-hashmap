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
        this.hashmap[this.hash(key)] = `${key}, ${value}`;
    }

    getLength() {
        return this.hashmap.length;
    }
}

export { HashMap }