class Heap {
    constructor(arr, func) {
        this.arr = arr || []
        this.func = func || ((a, b) => a >= b)
        this.compare = function (index, other) {
            if (this.arr[other] == null) {
                return true
            } else {
                return this.func(this.arr[index], this.arr[other])
            }
        }
        this.heapify()
    }
    push(n) {
        this.arr.push(n)
        this.upper(this.arr.length - 1)
    }
    pop() {
        const arr = this.arr
        this.swap(0, arr.length - 1)
        const res = arr.pop()
        this.down(0)
        return res
    }
    heapify() {
        for (let i = 1; i < this.arr.length; i++) {
            this.upper(i)
        }
    }
    upper(index) {
        const up = Math.floor((index - 1) / 2)
        if (up>=0&&this.compare(index, up)) {
            this.swap(index, up)
            this.upper(up)
        }
    }
    down(index) {
        const left = index * 2 + 1
        const right = index * 2 + 2
        const selected = this.compare(left, right) ? left : right
        if (!this.compare(index, selected)) {
            this.swap(selected, index)
            this.down(selected)
        }
    }
    swap(i, j) {
        const arr = this.arr;
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
}

const heap=new Heap([1,4353,456,2,5634,56,45,2563,45,43,6,457,548,7,67,5])
let res=[]
while(heap.arr.length>0){
    res.push(heap.pop())
}
console.log(res)