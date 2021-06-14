function* increment(i) {
    yield i + 1;
    yield i + 2;
}
var obj = increment(10);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next()); 