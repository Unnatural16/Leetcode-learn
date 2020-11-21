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
var sortList = function(head) {
    let arr=[];
    for (let node=head; node!=null; node=node.next) {
        arr.push(node.value);
    }
    arr.sort((a, b)=> a-b)
    for (let node=head; node!=null; node=node.next){
        node.val=arr.shift()
    }
    return head
};