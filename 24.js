/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head==null) return null
    if(head.next==null) return head
    let result = head.next
    let slow=head
    let fast=head.next
    while (slow!=null&&fast!=null) {
        let next_slow=fast.next
        let next_fast=next_slow?next_slow.next:null
        slow.next=next_fast?next_fast:next_slow
        fast.next=slow
        slow=next_slow
        fast=next_fast
    }
    return result
};
let a={
    val:1,
    next:{
        val:2,
        next:{
            val:3,
            next:{
                val:4,
                next:{
                    val:5,
                    next:{
                        val:6
                    }
                }
            }
        }
    }
}
a= swapPairs(a)
console.log(a)