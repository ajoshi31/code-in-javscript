function filter(array, callbackFun) {
    if (!Array.isArray(array) || !array.length || typeof callbackFun !== 'function') {
        return []
    } else {
        let result = [];
        for (let i = 0; i < array.length; i++) {
            if (callbackFun(array[i], i, array)) {
                result.push(array[i]);
            }
        }
        return result;
    }
}

module.exports = filter;
