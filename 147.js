/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
    let dummy = {
        val:0,next:head
    }
    let flag=true
    for (let node = dummy; node.next != null;) {
        for (let p = dummy; p.next != node.next; p = p.next) {
            flag = true
            if (p.next.val > node.next.val) {
                let nnext=node.next.next;
                node.next.next=p.next;
                p.next=node.next;
                node.next=nnext
                flag =false;
                break
            }
        }
        if(flag) node=node.next
    }
    return dummy.next
};
console.log(insertionSortList({val:3,next:{val:2,next:{val:4,next:{val:1}}}}))
console.log(2)