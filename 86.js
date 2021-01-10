/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let small={}
    let small_pointer=small
    let the_head={}
    the_head.next=head
    let pointer=the_head
    while(pointer.next){
        if(pointer.next.val<x){
            small_pointer.next=pointer.next
            pointer.next=pointer.next.next
            small_pointer=small_pointer.next
            small_pointer.next=null
        }else{
            pointer=pointer.next
        }
    }
    small_pointer.next=the_head.next
    return small.next
};
console.log(partition({val:1,next:{val:2,next:{val:3,next:{val:4,next:{val:5,next:{val:6}}}}}},3))