let {describe, test} = require('@jest/globals')
let spiralGenerate = require('./index.js')

describe("Check if spiral", () => {
    test("Test 1", function() {
        expect(spiralGenerate(3)).toStrictEqual([[1,2,3], [8,9,4], [7,6,5]]);
    });
});
