function Node(index) {
  this.road = new Set()
  this.marked = false;
  this.index = index;
}
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
  let Nodes = new Map();
  for (let pair of pairs) {
    for (index of pair) {
      if (!Nodes.has(index)) {
        Nodes.set(index, new Node(index));
      }
    }
  }
  for (let pair of pairs) {
    Nodes.get(pair[0]).road.add(Nodes.get(pair[1]));
    Nodes.get(pair[1]).road.add(Nodes.get(pair[0]));
  }
  let rings = []
  for (let Node of Nodes.values()) {
    if (Node.marked == false) {
      rings.push(new Set())
      let queue =[Node]
      while (queue.length>0){
        let node = queue.shift()
        for(let newNode of node.road){
          if(newNode.marked==false){
            queue.push(newNode)
          }
        }
        rings[rings.length-1].add(node.index)
        node.marked=true
      }
    }
  }
  s=s.split('')
  for(let ring of rings){
    let buffer=[]
    for(let index of ring){
      buffer.push(s[index])
    }
    buffer.sort()
    let indexs=Array.from(ring)
    indexs.sort((a, b)=>a-b)
    for(let index in indexs){
      s[indexs[index]]=buffer[index]
    }
  }
  return s.join('')
};
console.log(smallestStringWithSwaps("vbjjxgdfnru",
[[8,6],[3,4],[5,2],[5,5],[3,5],[7,10],[6,0],[10,0],[7,1],[4,8],[6,2]]))
