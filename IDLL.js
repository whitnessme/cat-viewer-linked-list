// Double Linked List Node (with next and prev pointers)
class DLLNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

// ImageDoubleLinkedList Class 
// Values will be image file URLs!
class IDLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // Make a new node with the URL thats passed in!
        // Then make it the new head; adjust other attributes as well. 
        let newNode = new DLLNode(val);
        if (this.length >= 1) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    addToTail(val) { 
        // Make a new node with the URL thats passed in!
        // Then assign it as the new tail; adjust other attributes as well.        
        let newNode = new DLLNode(val);
        if (this.length >= 1) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length += 1;
    }

    removeFromHead() {
        // Remove the head node and adjust necessary attributes of other nodes;
        if (!this.head) return;
        const oldHead = this.head;
        this.head = oldHead.next;
        if (this.head) this.head.prev = null;
        this.length--;
        return oldHead.value;
    }

    removeFromTail() { 
        // Remove the tail node and adjust necessary attributes of other nodes;
        if (!this.tail) return;
        const oldTail = this.tail;
        this.tail = oldTail.prev;
        if (this.tail) this.tail.next = null;
        this.length--;
        return oldTail.value;
    }

    
    peekAtHead() { 
        // return the head node! But...
        if (!this.head) return;
        return this.head;
    }

    peekAtTail() { 
        // return the tail node! But...
        if (!this.tail) return;
        return this.tail;
    }
}


// Scary syntax we have not learned yet, please ignore for now
export default IDLL;