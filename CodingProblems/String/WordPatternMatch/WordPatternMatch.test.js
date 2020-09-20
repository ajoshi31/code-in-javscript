let {describe, test} = require('@jest/globals')
let wordPattern = require('./WordPatternMatch.js')

describe("Word Pattern Match Test Case", () => {
    test("Test 1", function () {
        expect(wordPattern("aaaa", "aa aa aa aa")).toBe(true);
    });

    test("Test 2", function () {
        expect(wordPattern("abba", "dog cat cat dog")).toBe(true);
    });

    test("Test 3", function () {
        expect(wordPattern("abba", "dog cat cat god")).toBe(false);
    });

    test("Test 4", function () {
        expect(wordPattern("abba", "aa bb bb aa")).toBe(true);
    });

    test("Test 5", function () {
        expect(wordPattern("abba", "aa bb mm bb aa")).toBe(false);
    });

    test("Test 5", function () {
        expect(wordPattern("abbc", "mm bb bb mm")).toBe(false);
    });
});
