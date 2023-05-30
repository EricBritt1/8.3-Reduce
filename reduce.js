/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.
*/


const arr03 = [
    {name: 'joe'},
    {name: 'jake'},
    {name: 'till'},
    {name: 'goofy'}
];


    // extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']


function extractValue(arr, key) {

   return arr.reduce(function(accumulator, currentValue){
       accumulator.push(currentValue[key])
       return accumulator
    }, [])
};

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

//I got a lucky guess here buy using Array.from. It's worked previous times I've had a type error on the other methods which is understandable but I thought that reduce, unlike the other methods, works on strings. How come I had to use Array.from here?

function vowelCount(str) {
    const vowels = 'aeiou'
    

  return Array.from(str).reduce(function(object, letter){
        let lowerCasedLetter = letter.toLowerCase()
        if(vowels.includes(lowerCasedLetter)) {
            if(object[lowerCasedLetter] == null) {
                object[lowerCasedLetter] = 1;
            } else {
                object[lowerCasedLetter]++
            }
        }
        return object
    }, {})
};

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

const practiceArr = [
    {name: 'Eric'},
    {name: 'Cait'}
];

/* I originally did the following: 

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(accumulator, obj) {
        obj[key] = value;
        return accumulator
    }, {})
}
    How come this doesn't work? I don't understand how accumulator works in more complex problems working with objects nested within arrays. At the end of the function how do you know whether to put [] or {} (as to where the values will be accumulated)? 

*/
function addKeyAndValue(arr, key, value) {
   return arr.reduce(function(accumulator, obj, index){
            accumulator[index][key] = value;
            return accumulator
    }, arr)
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, cb) {
    return arr.reduce(function(acc, next) {
        if(cb(next)) {
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);

}
