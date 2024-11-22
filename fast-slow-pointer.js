// Check for cycle in linked list
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function findCycle(head) {
    let slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next
        if (slow === fast) {
            return true;
        }
    }
    return false;
}

head = new Node(1)
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

console.log('Does have cycle', findCycle(head))

head.next.next.next.next.next.next = head.next;

console.log('Does have cycle', findCycle(head))

// Find length of a cycle

// class Node {
//     constructor(value, next = null) {
//         this.value = value;
//         this.next = next
//     }
// }

function findCycleLength(head) {
    let slow = head, fast = head;
    while (fast !== null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            return findLength(slow)
        }
    }
    return 0
}

function findLength(slow) {
    let current = slow, length = 0;

    while (true) {
        current = current?.next;
        length++;
        if (current === slow) {
            break
        }
    }
    return length
}

head = new Node(1)
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = head.next.next;

console.log('Cycle length', findCycleLength(head))

// Find start of linkedlist cycle

function findCycleStart(head) {
    let slow = head, fast = head, cycleLength = 0;
    while (fast !== null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            cycleLength = findLength(slow)
            break;
        }
    }
    return cycleStart(head, cycleLength)
}

function findLength(slow) {
    let current = slow, length = 0;

    while (true) {
        current = current?.next;
        length++;
        if (current === slow) {
            break
        }
    }
    return length
}

function cycleStart(head, length) {
    let pointer1 = head, pointer2 = head;
    while (length > 0) {
        pointer2 = pointer2.next;
        length--;
    }
    while (pointer1 !== pointer2) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }
    return pointer1;
}

head = new Node(1)
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = head.next.next;

console.log('Cycle start', findCycleStart(head))