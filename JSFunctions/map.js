let myarray = [
    {
        id : 1
    },
    {
        id: 2
    },
    {
        id: 3
    }
]

let item  = myarray.map(item => {
    return {
        id: item.id * 2
    }
})

console.log(item)
