//  function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed

function reverseStr(str) {
    var newString = ""
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseStr('yagmyrdsdsad'));


function findNextSquare(sq) {
    const n = Math.sqrt(sq);
    for (var i = 0; i <= sq; i++) {
        if (Number.isInteger(n)) {
            return (n + 1) * (n + 1);
        } else return -1;

    }
    // Return the next square if sq if a perfect square, -1 otherwise

}
findNextSquare(9)



//shortest word
function findShort(s) {
    var wordArr = s.split(" ");
    var lengthArr = [];
    for (var i = 0; i < wordArr.length; i++) {
        lengthArr[i] = wordArr[i].length;
    }

    var lowestNum = lengthArr[0];
    for (var j = 0; j < lengthArr.length; j++) {
        if (lengthArr[j] < lowestNum) {
            lowestNum = lengthArr[j];
        }
    }

    return lowestNum;

}
//good solution
function findShort(s) {
    var arr = s.split(' ');
    var smallest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length < smallest.length) {
            smallest = arr[i];
        }
    }
    return smallest.length;
}

/*You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N. */
// 1
function findOutlier(integers) {
    var evenArray = [];
    var oddArray = [];
    for (var i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            evenArray.push(integers[i]);
        } else {
            oddArray.push(integers[i]);
        }
    }
    evenL = evenArray.length;
    oddL = oddArray.length;
    if (evenL > oddL) {
        return oddArray[0];
    } else {
        return evenArray[0];
    }
}
// 2
function findOutlier(int) {
    var even = int.filter(a => a % 2 == 0);
    var odd = int.filter(a => a % 2 !== 0);
    return even.length == 1 ? even[0] : odd[0];
}

//Write a function that returns both the minimum and maximum number of the given list/array

function minMax(arr) {

    let min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }


    let max = arr[0];
    for (var j = 1; j < arr.length; j++) {
        if (arr[j] > max) {
            max = arr[j];
        }
    }

    return [min, max];
}
ar = [1, 2, 5, 8];
minMax(ar)
    // clever
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}
//solution2
function minMax(arr) {
    var max = arr[0],
        min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    return [min, max];
}


//Is a number prime?

function isPrime(num) {
    if (num === 1 || num <= 0) {
        return false

    } else {

        for (var x = 2; x < num; x++) {
            if (num % x === 0) {
                return false
            }

        }
        return true
    }
}

function firsNonRepeating(str) {
    var strArr = str.split(" ");
    for (var i = 0; i < strArr.length; i++) {
        if ()

    }
}

function firsNonRepeating(str) {
    var strArr = str.split(' ')
    var repeat = strArr.filter(a => a[0] === a[i])
    var nonRepeat = strArr.filter(a => a[0] != a[i])
}


var numbers = [1, 2, 3];
var roots = numbers.map(function(num) {
    return Math.sqrt(num)

});

var array1 = [1, 4, 6, 9];
const map1 = array1.map(x => x * 2);
console.log(map1);

//charcodeat()

var sentence = 'My name is Yagmyr';
var index = 4;
console.log('The character code' + sentence.charCodeAt(index) + 'is equal to ' + sentence.charAt(index));



//first non repeating letter


function firstNonRepeatingLetter(s) {
    var allLetters = s.split('');
    var letter;
    var characterMap = {};
    //get all character counts
    for (var i = 0; i < allLetters.length; i++) {
        letter = allLetters[i];
        if (typeof(characterMap[letter]) == 'undefined') {
            characterMap[letter] = 0;
        }
        characterMap[letter]++;
    }
    //remove any duplicates
    for (var c in characterMap) {
        if (characterMap[c] > 1) {
            delete characterMap[c];
        }
    }
    //find the first character in your string that is *still* in the map
    for (var i = 0; i < allCharacters.length; i++) {
        character = allCharacters[i];
        if (typeof(characterMap[character]) != 'undefined') {
            return character;
        }
    }
    //all characters in the string were duplicated (e.g. "ABBA")
    return 'No non repeating letters';
}

console.log(firstNonRepeatingLetter("stress"));
console.log(firstNonRepeatingLetter("doodle"));
console.log(firstNonRepeatingLetter("abba"));
console.log(firstNonRepeatingLetter("supercalifragilisticexpialidocious"));

/*
solution: map characters into an object
To begin, an empty object is initialized to be a count. Each char of the count is assigned as each letter from the input string.

If the letter doesn't already exist in the count, then the letter is assigned a value of 1. Otherwise, if the letter already exists, increase the count of its occurrence by 1.

After looping through each letter in the input string and assigning each letter to a key-value pair in the count, the next step is to loop through each property (key-value pair) in the count.

While looping through the properties in the count, the first property equal to 1 is the first non-repeating character in the input string.

The expected and actual output from invoking firstNonRepeatedCharacter(someString) is c.
*/

var firstNonRepeatedCharacter = function(string) {
    var count = {};
    for (var i = 0; i < string.length; i++) {
        var letter = string[i];
        if (!count[letter]) {
            count[letter] = 1;
        } else {
            count[letter]++;
        }
    }

    for (var letter in count) {
        if (count[letter] === 1) {
            return letter;
        }
    }
    return null;
}

var someString = 'aabcbd';
console.log(firstNonRepeatedCharacter(someString));


//middle character

function getMiddle(s) {
    //Code goes here!
    if (s.length % 2 === 0) {
        console.log(s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2))
        return s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2);
    } else
        return s.charAt(s.length / 2);
}
getMiddle('Emma');

// kata is to implement a difference function, which subtracts one list from another and returns the result.
//1
let difference = arr1.filter(x => !arr2.includes(x));
//2
Array.prototype.diff = function(a) {
    return this.filter(function(i) { return a.indexOf(i) < 0; });
};

[1, 2, 3, 4, 5, 6].diff([3, 4, 5]);


//Who liked this?

function likes(names) {
    if (names.length === 0) return "no one likes this";
    else if (names.length === 1) return names[0] + " " + "likes this";
    else if (names.length === 2) return names[0] + " " + names[1] + " " + "likes this";
    else if (names.length === 3) return names[0] + " " + names[1] + " " + names[2] + " " + "likes this";
    else {
        return names[0] + " " + names[1] + " and " + " 2 others like this";
    }
}
likes(['Max', 'John', 'Mark', 'Yagmyr']);



//count smiles

function countSmileys(arr) {
    var smiles = [":)", ";)", ":-)", ";-)", ";~)", ":~)", ":D", ";D", ":-D", ":~D", ";-D", ";~D"];

    var smilesCount = 0;
    for (var i = 0; i < arr.length; i++) {
        for (j = 0; j < smiles.length; j++) {
            if (arr[i] === smiles[j]) {
                smilesCount++
            }

        }
    }

    return smilesCount;
}

//solution2 
function countSmileys(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}

/*explanation:

arr.filter(x => ) // for each value in the array, represented as x, add it to a new array if x evaluates in the function as true.
/^[:;] //regex syntax. Match only strings starting with ":" or ";" as first capture group.
[-]? //regex syntax. String may contain one or zero "-" or "" as second capture group.
[)D]$ //regex syntax. Match only strings that contain ")" or "D" at the end as final capture group.
rexex.test(x) // return a boolean value if the string passed as a paramater contains a match for the regex.

Since array.filter will make him a new array of smileys that pass his regex, he can just count the length of the new array and go home.*/


//chain adding function 


function add(n) {
    var fn = function(x) {
        return add(n + x);
    };

    fn.valueOf = fn.toString = function() {
        return n;
    };

    return fn;
}

function add(n) {
    var x = function(m) {
        return add(n + m);
    }
}
//solution2
var add = function(n) {
    const f = x => add(n + x)
    f.valueOf = () => n
    return f;
}


//bouncing ball

function bouncingBall(h, bounce, window) {
    if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1
    let seen = 0;

    while (h > window) {
        seen += 1
        h *= bounce
        if (h > window) seen += 1
    }

    return seen;
}

//solut2
function bouncingBall(h, bounce, window) {
    if (h <= 0.0 || bounce <= 0.0 || bounce >= 1.0 || window >= h) {
        return -1;
    }

    let views = 1;
    while ((h *= bounce) > window) {
        views += 2; //views = views + 2
    }
    return views;
}


//filter out the geese

function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let nogeese = birds.filter(bird => !geese.includes(bird))
    return nogeese;
};

//solution2
function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(bird => geese.indexOf(bird) < 0);
};

//maximum subarray sum
function maxSequence(arr) {
    var maxTemp = 0,
        maxLast = 0;
    for (var i = 0; i < arr.length; i++) {
        maxTemp = maxTemp + arr[i];
        if (maxTemp < 0) {
            maxTemp = 0;
        }
        if (maxLast < maxTemp) {
            maxLast = maxTemp;
        }
    }
    return maxLast;

}

//alternate answer
var maxSequence = function(arr) {
    var max = 0;
    var cur = 0;
    arr.forEach(function(i) {
        cur = Math.max(0, cur + i);
        max = Math.max(max, cur);
    });
    return max;
}


//common denominators (must be solved on codewars)
function convertFrac(array) {
    let result = "";
    let data = [];
    array.forEach(x => data.push(x[1]));
    let commonDenom = data.sort((a, b) => a - b)[data.length - 1];

    function isMultiple(value) {
        return commonDenom % value === 0;
    }

    while (!data.every(isMultiple)) {
        commonDenom++
    }

    for (let i = 0; i < array.length; i++) {
        let factor = commonDenom / array[i][1];
        result += "(" + array[i][0] * factor + "," + array[i][1] * factor + ")"
    }

    return result
}

//best answer

const gcd = (a, b) => b ? gcd(b, a % b) : a;
const lcm = (a, b) => a * b / gcd(a, b);

function convertFrac(arr) {
    const cd = arr.reduce((a, [_, d]) => lcm(d, a), 1);
    return arr.map(([n, d]) => `(${n * cd/d},${cd})`).join('');
}

// 2nd best

function gcd(a, b) {
    return a < b ? gcd(b, a) : b == 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return a * b / gcd(a, b);
}

function convertFrac(lst) {
    var denom = lst.reduce(function(p, c) {
        return lcm(p, c[1]);
    }, 1);
    return lst.map(function(v) {
        return "(" + (v[0] * denom / v[1]) + "," + denom + ")";
    }).join("");
}


convertFrac([
        [69, 130],
        [87, 1310],
        [3, 4]
    ]) //=> '(18078,34060)(2262,34060)(25545,34060)'
    // [ [1, 2], [1, 3], [1, 4] ] // => (6,12)(4,12)(3,12)

//Hashtag Generator

function generateHashtag(str) {
    if (str === '') return false
    const strUpperCase = str
        .split(' ')
        .map(s => s.charAt(0).toUpperCase() + word.slice(1))
        .join('')
    const stringWithHashtag = `#${strUpperCase.trim()}`
    return stringWithHashtag.length > 140 ? false : stringWithHashtag
}
// solution2
function generateHashtag(str) {
    if (str === '') return false

    var st = "#" + str.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')

    return st.length > 140 ? false : st
}


//summation of every number from 1 to n

var summation = function(num) {
        var total = 0;
        for (var i = 1; i <= num; i++) {
            total += i;
        }
        return total;
    }
    //sol2
const summation = n => n * (n + 1) / 2;
//sol3
function summation(num) {
    return num * (num + 1) / 2
}


//even numbers in array

function evenNumbers(array, number) {
    var evenNumbers = [];
    for (var i = 1; i <= number; i++) {
        for (var j = array.length - 1; j < number; j--) {
            if (array[j] % 2 === 0) {
                evenNumbers.push(array[j]);

            }
            return evenNumbers;
        }
    }
}

//solution
const evenNumbers = (array, number) => array.filter(number => number % 2 === 0).slice(-number)

//solut2
function evenNumbers(array, number) {
    let arr = [];
    for (let i = array.length - 1; number > 0; i--) {
        if (array[i] % 2 == 0) {
            arr.push(array[i]);
            number--;
        }
    }
    return arr;
}

evenNumbers([1, 5, 4, 9, 8, 6, 12], 3);


/*  function that takes in a string of one or more words, 
and returns the same string, but with all five or more letter words reversed*/

function reverseStr(str) {
    var newString = ""
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseStr('yagmyrdsdsad'));


/*Task
You are given three non-negative integers x,y,z. They represent the remainders of the unknown positive integer n divided by 3,5,7.

That is: n % 3 = x, n % 5 = y, n % 7 = z

Your task is to find the minimum possible positive integer n and return it.
For x = 2, y = 3, z = 2, the output should be 23   (NOT SOlVED)
*/
function findUnknowNumber(x, y, z) {
    var posInt = []
    var n;
    x = n % 3;
    y = n % 5;
    z = n % 7;
    for (var i = 0;) {

        push.n

    }

    //Remove string spaces

    function noSpace(x) { return x.split(' ').join('') }
    //sol2  
    function noSpace(x) {
        return x.replace(/\s/g, '');
    }

    //sol3
    function noSpace(x) {
        var result = ""
        for (var i = 0; i < x.length; i++) {
            if (x[i] !== " ") {
                result += x[i];
            }
        }
        return result;
    }

    //Convert Number to A string

    function numberToString(num) {
        return num.toString()

    }

    //bit counts

    var countBits = function(n) {
        var counter = 0;
        while (n > 0) {
            var binaryNumber = 1;
            while (binaryNumber * 2 <= n) {
                binaryNumber = binaryNumber * 2;
            }
            n = n - binaryNumber;
            counter++;
        }
        return counter;
    };
    countBits(7)

    //sol2

    function countBits(n) {

        var dectobin = (n).toString(2).split('');
        console.log(dectobin);
        var bitTotal = dectobin.reduce((sum, num) => sum + Number(num), 0);
        return bitTotal;
    };
    countBits(4);
    //sol3
    countBits = n => n.toString(2).split('0').join('').length;



    //arguments length
    //sol1
    const args_count = (...args) => args.length

    //sol2
    function args_count() {
        return arguments.length;
    }


    //Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
    //sol1
    pigIt = newStr => newStr.split(' ').map(e => e.substr(1) + e[0] + 'ay').join(' ');
    //sol2

    function pigIt(str) {
        var s = str.split(' ');
        var newStr = s.substr(1) + s[0] + 'ay';
        console.log(newStr);
    };


    //Tic tac toe checker
    /* 
    If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:
    */
    function isSolved(board) {
        for (let i = 0; i < 3; i++) {
            if (board[0][i] == board[1][i] && board[0][i] == board[2][i] && board[0][i] !== 0) {
                return board[0][i];
            }
            if (board[i][0] == board[i][1] && board[i][0] == board[i][2] && board[i][0] !== 0) {
                return board[i][0];
            }
        }
        if (board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] !== 0) {
            return board[0][0];
        }
        if (board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[0][2] !== 0) {
            return board[0][2];
        }
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (board[i][j] == 0)
                    return -1;
            }
        }
        return 0;

    }

    //sol2
    function isSolved(board) {
        board = board.join('-').replace(/,/g, '');
        if (/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
        if (/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
        if (/0/.test(board)) return -1;
        return 0;
    }

    /*
    In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] does not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)
    */

    function pickPeaks(arr) {
        var obj = {
            pos: [],
            peaks: []
        }

        var peak = Math.max(...arr);

        //  return {pos:[],peaks:[]}
    }
    //given this list [11233445], the return value would be an empty result {pos: [], peaks:[] };
    //given this list [11221], the return value would be {pos: [2], peaks: [2]};

    //i need to iterate through the list of numbers
    //i need to check each number that isn't the first and last number to see if it's larger than the previous number and larger or equal to the next number
    //if it meets the condition, add the position and the value to correct array in the return object
    //return the results object after all the peaks have been found or if none have
    //it wants the first repeating number if it's a peak!!!

    function pickPeaks(arr) {
        var obj = { pos: [], peaks: [] };
        for (var i = 1; i < arr.length - 1; i++) {
            //if the current number is higher than previous and higher than the next one, it's the peak
            if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
                obj.pos.push(i);
                obj.peaks.push(arr[i]);
                //if current number is higher than the previous and equal to the next
            } else if (arr[i] > arr[i - 1] && arr[i] === arr[i + 1]) {
                //save the position and value of this in a temporary variable
                var temp = [];
                temp.push(i);
                temp.push(arr[i]);
                console.log(temp);
                //check the next one to see if it's higher than the one after, equal to the next one, or higher than the previous one
                for (var j = i + 1; j < arr.length - 1; j++) {
                    //if it is higher than the next one, return the saved first repeating number
                    //3,3,4,5,3
                    if (arr[j] > arr[j + 1]) {
                        obj.pos.push(temp[0]);
                        obj.peaks.push(temp[1]);
                        break;
                    } else if (arr[j] < arr[j + 1]) {
                        //if the next one is higher, break out
                        break;
                    }
                }
            }
        }
        return obj;
    }

    pickPeaks([1, 2, 2, 2, 3]);
    //pickPeaks([1,2,4,3,3])



    /*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

Input: "Hello World"
Output: 5

*/


    //lyfecycles of react.  componontdidmount ---> what we write inside



    var str = s.split(' ');

    if (str[str.length - 1].length !== 0)
        return str[str.length - 1].length;
    else return 0;