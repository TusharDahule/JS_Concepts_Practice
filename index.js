// Import stylesheets
import './style.css';
//import '_' from 'lodash';
import _ from 'lodash';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

/* const student = {};

if (rollno in student) {
} else {
  student[rollno] = 1; // gives roll no is not defined
}
 */
console.log('----------memoization in js---------------');

function memoize() {
  var cache = {};

  return function (num) {
    if (cache.hasOwnProperty(num)) {
      console.log('from cache');
      return cache[num];
    } else {
      cache[num] = num * num;
      return cache[num];
    }
  };
}

var mem = memoize(); // returns function object

console.log(mem(20));
console.log(mem(40));
console.log(mem(20));

console.log('----------recursion in js---------------');

var sum = 0;

function add(num) {
  if (num <= 0) {
    return 0;
  } else {
    sum = sum + num;
    add(num - 1);
  }
}

add(3);
console.log(sum);

var arrSum = 0;

function addArrayElements(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    arrSum += arr.pop();
    addArrayElements(arr);
  }
}

addArrayElements([1, 2, 3, 4, 5]);
console.log(arrSum);

function addArrayElementsWithoutUsingGlobalVariable(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr.pop() + addArrayElementsWithoutUsingGlobalVariable(arr);
  }
}

console.log(addArrayElementsWithoutUsingGlobalVariable([1, 2, 3, 4, 5]));

console.log('----------miscellaneous problems in js---------------');

const obj1 = {
  addMe: function () {
    return this;
  },
};

console.log(obj1.addMe()); /* refers to obj that is calling the function  */

const obj2 = {
  addMe: () => {
    return this;
  },
};

console.log(obj2.addMe()); /* refers to global window object */
