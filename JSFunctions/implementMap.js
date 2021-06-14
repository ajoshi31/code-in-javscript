function map(arr, callbackFun) {
    if (!Array.isArray(arr) || !arr.length || typeof callbackFun !== 'function') {
        return [];
    } else {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            result[i] = callbackFun(arr[i], i, arr)
        }
        return result;
    }
}


module.exports = map;
