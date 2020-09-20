const romanNumerals
    = ['xl', 'l', 'xxx', 'xx', 'ix', 'x', 'iv', 'v', 'iii', 'ii', 'i'];
const romanDecMap = {
    i: 1,
    ii: 2,
    iii: 3,
    iv: 4,
    v: 5,
    ix: 9,
    x: 10,
    xx: 20,
    xxx: 30,
    xl: 40,
    l: 50,
};
function sortMapArr(array) {
    const myArray = array.map((a) => {
        const [, num] = a.split(' ');
        const obj = {
            completeName: a
        };
        obj.num = romanDecMap[num.toLowerCase()];
        return obj;
    }).sort((a, b) => a.num - b.num);
    return myArray.map((obj) => obj.completeName);
}

function sortRoman(names) {
    const namesObj = names.reduce((sum, curr) => {
        const cSum = sum;
        const [name,] = curr.split(' ');
        if (!cSum[name]) {
            cSum[name] = [];
        }
        cSum[name].push(curr);
        cSum[name] = sortMapArr(cSum[name]);
        return cSum;
    }, {});
    const sName = Object.keys(namesObj);
    sName.sort((a, b) => {
        if (a < b) { return -1; }
        if (a > b) { return 1; }
        return 0;
    });
    return sName.map((o) => namesObj[o]).reduce((sum, ar) => {
        return sum.concat(ar);
    }, [])
}

var arrayObj = ["Louis IX", "Louis V",  "Philippe IX",
    "Philippe L", "Phili II", "Philippe II", "Louis I",];

console.log(sortRoman(arrayObj));
