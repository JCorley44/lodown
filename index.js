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
 * @return {Any Datatype}: The function will return the datatype of the input as a string
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








/**
 * indexOf function: This function will search for the first instance of the given input value
 * 
 * @param {Array & Value} collection and simple data: the input value will 
 * 
 * @return {Number} simple data: The return will be the first instance of the input value
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
 
 
 
 
 
 
 
 /**
 * unique function: This function will return an array with only unique values 
 * 
 * @param {Array} collection: An array  
 * 
 * @return {Array} collection: This array will have all of the unique values from the 
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
 
 
 
 
 
 
 
 /**
 * filter function: Iterates over an array with a function and will return a new array.
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

 
 
 
 
 
 
 
 /**
 * reject function: Iterates over an array with a function and will return a new array.
 * 
 * @param {Array & Function} collection and complex data: a function will iterate over the array and determine if the elements are true or
 * false.
 * 
 * @return {Array} collection: the array returned will be all of the values which have been evaluated as false
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

 
 
 
 
 
 
 
 /**
 * partition function: Seperates the values in the array into two sub arrrays one of the truthy values and the other of falsy values
 * 
 * @param {Array & Function} collection and complex data: 
 * 
 * @return {Array} collection: One array with two sub arrays inside of it, one with all of the truthy values and the other with all of the falsy values 
 */
 
function partition (array, test){
    let arr = [];
    arr.push(filter(array,test),reject(array,test));
    return arr;
};

 






/**
 * map function: Iterates over an array applying a callback function to each element.
 * 
 * @param {Object or Array & Function} collection and complex data: The inputs will have their values changed by the inout function
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
 
 
 
 
 
 
 
 /**
 * pluck function: Iterates over an array of objects and stores the values in an array 
 *  
 * @param {Array & Object} collection: 
 * 
 * @return {Array} collection: The return will be an array of the objects values.
 */
 
function pluck (arr, type) {
    var arrPlucked = [];
    arr.forEach(function(element) {
        arrPlucked.push(element[type]);
    });
    return arrPlucked;
};

 
 
 
 
 
 
 
 /**
 * every function: Evaluates a given collection for true or false when a function is passed over each element.
 * 
 * @param {Collection & Function} collection and complex data: 
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
 
 
 
 
 
 
 
 /**
 * some function: this functoin looks at an array element and tests it to see if it passes or fails.
 * 
 * @param {Collection & Function} collection and function: the function will execute over 
 * 
 * @return {Boolean} logic: After the elements are tested against the function the return value will either be truth or false
 * depending if the individual element passes the test.
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
 
 
 
 
 
 
 
 /**
 * reduce function: It will call a function for every element in a given collection with arguments: previous result, element, index.
 * If the seed is not given the value of the first element will be used as the seed.
 * 
 * @param {Array, Action & Seed} collection, complex data, and data: An array will have a given function iterate over each element inorder to reduce
 * the array to a single value.
 * 
 * @return {Data} data: The return will be the amalgamation of all elements after the functions has iterated over them.
 */
 
 function reduce (array, action, seed){
      each(array, function(elem, ind, arr){
        if(seed === undefined){
            seed = array[0];
        } else if(seed){
            seed = action(seed, elem, ind);
        }
    });
    return seed;
};
 
 
 
 
 
 
 
 /**
 * extend function: To copy object properties from one object to another.  
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
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

