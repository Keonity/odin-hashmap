class HashMap {
    constructor(size = 16) {
        this.hashmap = new Array(size);
    }

    getLength() {
        return this.hashmap.length;
    }
}

export { HashMap }