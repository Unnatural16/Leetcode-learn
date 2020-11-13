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
var oddEvenList = function(head) {
    if(head==null)return null
    if(head.next==null) return head
    let first = head,second = head.next
    let node1=first,node2=second
    while (node2.next!=null) {
        node1.next = node2.next
        node1=node1.next
        if(node1.next==null){
            break
        }
        node2.next=node1.next
        node2=node2.next
    }
    node1.next=second
    node2.next=null
    return first
};
