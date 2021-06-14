function add(x) {
    console.log("outer", [...arguments])
    let m = [...arguments].reduce((prev, curr)=>{
        return prev + curr;
    })    
    return function (y) {
        if (y == null) {
            return m;
        } else {
            console.log("inner", [...arguments])
            let n = [...arguments].reduce((prev, curr)=>{
                return prev + curr;
            })  
            return add(m + n);
        }
    }
}

let result = add(1,2,3)('_')(6,4)(3,4,5)();

console.log(result)
