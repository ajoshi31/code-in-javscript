let myarray = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    }
]

let callbackFun = (item) => {
    return {
        id: item.id * 2
    }
}

let item = myarray.map(callbackFun)

console.log(item)
