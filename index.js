'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

  
  
  





/**
 * identity function: It takes in any value and then returns it. The input value remains unaltered. 
 * 
 * @param {Any Datatype} value: The input value can be of any datatype
 * 
 * 
 * @return {Any Datatype}: The return value will be the exact same as the input. 
 */

function identity (value){
    return value;
}
module.exports.identity = identity;









/**
 * typeof function: Any value can be the input and when invoked the function will returned the datatype
 * 
 * @param {Any Datatype} value: The input can be any value 
 * 
 * @return {String}: The function will return the datatype of the input as a string
 */
 
function typeOf (value){
    if(value === null){
        return 'null';
    }else if(Array.isArray(value)){
        return 'array';
    } else{
        return typeof value;
    }
}
module.exports.typeOf = typeOf;









/**
 * first function: the inputs for this function are an array and number. The number will determine how many elements of the 
 * array will be output.
 * 
 * @param {Array & Number} collection and simple data: the number input will determine how many elements will be returned.
 * Edge cases of the number being negative and the array parameter not being an array will return an empty array. If the 
 * number parameter is greater than the array length the function will return the array parameter in its entirety. Lastly
 * if the number parameter is undefined only the first element of the array will be returned. 
 * 
 * @return {Array} collection: the array will have the same number of elements as the input number.
 */
 
function first (array, number){
    var outputArray = [];
    var emptyArray = [];

    if(!Array.isArray(array)){
        return [];
    } else if(number > array.length){
        return array;
    } else if(number === undefined){
        return array[0];
    } else if(number < 0){
        return emptyArray;
    } else{
         return outputArray = array.slice(0, number);
    }

}
module.exports.first = first;









/**
 * last function: the inputs for this function are an array and number. The number will determine how many elements of the 
 * array will be output.
 * 
 * @param {Array & Number} collection and simple data: the number input will determine how many elements will be returned.
 * Edge cases of the number being negative and the array parameter not being an array will return an empty array. If the 
 * number parameter is greater than the array length the function will return the array parameter in its entirety. Lastly
 * if the number parameter is undefined only the first element of the array will be returned. 
 * 
 * @return {Array} collection: the array will have the same number of elements as the input number.
 */
 
function last (array, number){
   
    var outputArray = [];
    var emptyArray = [];

    
if(!Array.isArray(array)){
    return emptyArray;
} else if(number > array.length){
    return array;
} else if(number === undefined){
    return array[array.length - 1];
} else if(number < 0){
    return emptyArray;
} else{
     return outputArray = array.slice(-number, array.length);
    }
};
module.exports.last = last;







/**
 * indexOf function: This function will search for the first instance of the given input value. If the value isn't 
 * in the array the return will be negative one. 
 * 
 * @param {Array & Value} collection and simple data: the input value will 
 * 
 * @return {Number} simple data: The return will be the first instance of the input value.
 */
 
 function indexOf (array, value){
    // return array.indexof(value);
    
    for(var i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }
    }
    
        return -1;
}
module.exports.indexOf = indexOf;
 
 
 
 
 
 
 /**
 * contains function: Checks to see if the input value is an value of one of the elements in the array 
 * 
 * @param {Array} collection: An array of numbers
 *  
 * @return {Boolean} logical: If the input value is inside of the array then true will be returned false otherwise
 */
 
 function contains (array, value){
    
return (array.includes(value)) ? true : false;
}
module.exports.contains = contains;
 
 
 
 
 
 
 
 /**
 * each function: 
 * 
 * @param {Collection & Function} collection and simple data: 
 * 
 * @return {Array} collection: 
 */
 
 function each (collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
};
module.exports.each = each;
 
 
 
 
 
 /**
 * unique function: This function will return an array with only unique values 
 * 
 * @param {Array} collection: An array  
 * 
 * @return {Array} collection: Will return a new array with only unique values 
 */
 
function unique (array){
    
    var resultArray = [];
    
    for(var i = 0; i < array.length; i++){
        
        if(indexOf(array, array[i]) === i){
          resultArray.push(array[i]);
        }
    }
    
    return resultArray;
};
module.exports.unique = unique;
 
 
 
 
 
 
 /**
 * filter function: Iterates over an array with a function and will return a new array. The new array will have only values that have a value
 * of true when testing againt thr input function.
 * 
 * @param {Array & Function} collection and complex data: a function will iterate over the array and determine if the elements are true or
 * false.
 * 
 * @return {Array} collection: the array returned will be all of the values which have been evaluated as true.
 */
 
function filter (array, action){
    let arr = [];
      each(array,(value,index,collection)=>{
        if(action(value,index,collection)){
            arr.push(value);
        }
    });
    return arr;
};
module.exports.filter = filter;
 
 
 
 
 
 
 /**
 * reject function: Iterates over an array with a function and will return a new array of falsy values. The value of false will be assigned when 
 * tested against the input function. 
 * 
 * @param {Array & Function} collection and complex data: a function will iterate over the array and determine if the elements are true or
 * false.
 * 
 * @return {Array} collection: the array returned will be all of the values which have been evaluated as false.
 */
 
 function reject (array, test){
    let arr = [];
      each(array,(value,index,collection)=>{
        if(!test(value,index,collection)){
            arr.push(value);
        }
    });
    return arr;
};
module.exports.reject = reject;
 
 
 
 
 
 
 
 /**
 * partition function: Seperates the values in the array into two sub arrrays one of the truthy values and the other of falsy values. The values 
 * are evaluated by the input function.
 * 
 * @param {Array & Function} collection and complex data: A collection for the partition to iterate over using a function.
 * 
 * @return {Array} collection: One array with two sub arrays inside of it, one with all of the truthy values and the other with all of the falsy values 
 */
 
function partition (array, test){
    let arr = [];
    arr.push(filter(array,test),reject(array,test));
    return arr;
};
module.exports.partition = partition;
 






/**
 * map function: Iterates over an array applying a callback function to each element.
 * 
 * @param {Object or Array & Function} collection and complex data: The inputs will have their values changed by the input function
 * 
 * @return {Array} collection: The return is an array with element having the value of callback function
 * and the previous elements value 
 */
 
function map (collection, test){
    let arr = [];
      each(collection,(value,index,collection)=>{
        let val = test(value,index,collection);
        arr.push(val);
    });
    return arr;
};
module.exports.map = map;
 
 
 
 
 
 
 /**
 * pluck function: Iterates over an array of objects and stores the values in an array. 
 *  
 * @param {Array} collection: The array has an object in each element.
 * 
 * @return {Array} collection: The return will be an array of the objects values of a certain proerty name.
 */

function pluck (array, property) {
  let arr = [];
  map(array,(value, key , collection) =>{
    for(let keys in value){
      if(keys === property){
        arr.push(value[keys]);
      }
    }
  });
  return arr;
}
module.exports.pluck = pluck;
 
 
 
 
 
 
 /**
 * every function: Evaluates a given collection for true or false when a function is passed over each element.
 * 
 * @param {Collection & Function} collection and complex data: A function will iterate over a collection to test the truthyness of it.  
 * 
 * @return {Boolean} logical: It will return true only if all elements in the arrayare evaluated as true. 
 * If one element returns as false then all are false.
 */
 
function every (collection, action){
    let resultsArray = [];
      each(collection, function(elem, ind, arr){
        if(action === undefined){
            if(elem){
                resultsArray.push(true);
            } else {
                resultsArray.push(false);
            }
        } else if (action(elem, ind, arr) === true) {
            resultsArray.push(true);
        } else if (!action(elem, ind, arr)) {
            resultsArray.push(false);
        }
    });
    return !contains(resultsArray, false);
};
module.exports.every = every; 
 
 
 
 
 
 
 /**
 * some function: this function looks at an array element and tests it to see if it passes or fails.
 * 
 * @param {Collection & Function} collection and function: the function will execute over 
 * 
 * @return {Boolean} logic: If one element in the array returns true then the final resulting output for the function will be true.
 * It will only return false if every object in the array is false. 
 */
 
function some (collection, action){
    let resultsArray = [];
      each(collection, function(element, index, array) {
        if (!action) {
            if (element) {
                resultsArray.push(true);
            } else {
                resultsArray.push(false);
            }
        } else if (action(element, index, array) === true) {
                resultsArray.push(true);
        } else if (action(element, index, array) === false) {
                resultsArray.push(false);
        }
    });
    return contains(resultsArray, true);
};
module.exports.some = some; 
 
 
 
 
 
 /**
 * reduce function: It will call a function for every element in a given collection with arguments: previous result, element, index.
 * If the seed is not given the value of the first element will be used as the seed. The reduce function will iterate over the collection 
 * and return a single value that was generated. This value is the seed or accumulator.
 * 
 * @param {Array, Action & Seed} collection, complex data, and data: An array will have a given function iterate over each element inorder to reduce
 * the array to a single value.
 * 
 * @return {Data} data: The return will be the any datatype the user needs.
 */

function reduce(array, func, seed){
     let previousResult;
    if(seed !== undefined){
         previousResult = seed;
        each(array, function (e,i,a){
            previousResult = func(previousResult, e, i,a);
        });
    }else {
         previousResult = array[0];
        for (let i = 1; i < array.length; i++){
          previousResult = func(previousResult, array[i], i, array);
        }
    }
return previousResult;
}

module.exports.reduce = reduce; 
 
 
 
 
 
 
 /**
 * extend function: Copy object properties from one object to another.  
 * 
 * @param {Multiple Objects} collections: It will take in multiple objects 
 * 
 * @return {Object} collection: the first object with all of the properties from the other objects entered. 
 */
 
 function extend (object){
      each(arguments, function(elem, ind, arr){
        Object.assign(object, elem);
    });
    return object;
};
module.exports.extend = extend;
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

