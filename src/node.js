class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }

    setValue(newValue) {
        this.value = newValue;
    }

    setNext(newNext) {
        this.nextNode = newNext;
    }

    getNext() {
        return this.nextNode;
    }

    getValue() {
        return this.value;
    }

    print() {
        console.log(`Node Value: ` + this.value);
        console.log(this.nextNode);
    }
}

export { Node };