var id = 'Global';

function fun1() {
    setTimeout(function() {console.log(this.id);});
}
this.id='Global'
const a={
    id:'a',
    func:fun1
}
fun1.call(a)