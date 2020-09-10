/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true
Example 2:

Input:pattern = "abba", str = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", str = "dog dog dog dog"
Output: false
 */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}2
 */

let wordPattern = function(pattern, str) {

    let strArr =  str.split(" ");
    if(pattern.length !== strArr.length){
        return  false
    }
    let patternMap = {};
    let set = new Set();
    for(let i = 0 ; i < pattern.length; i++ ){
        if(patternMap.hasOwnProperty(pattern[i])){
            if(patternMap[pattern[i]] !== strArr[i]){
                return false;
            }
        } else {
            if(set.has(strArr[i])){
                return  false;
            }
            set.add(strArr[i])
            patternMap[pattern[i]] =  strArr[i];
        }
    }
    return  true;
};

module.exports = wordPattern;
