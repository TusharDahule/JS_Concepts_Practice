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

/* difference between arrow function and traditional function */

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

/* miscellaneous problem */
var a = 1;
console.log('a: ', a);

addition();
console.log('after addition, a: ', a);

var a = 3;
console.log('a: ', a);

function addition() {
  a = a + a;
}

addition();
console.log('After addition, a: ', a);

xsx = a;
console.log('xsx: ', xsx);

function assignValueToUndeclaredVar() {
  xsx2 = a;
  console.log('from function scope, xsx2 :', xsx2);
  {
    xsx3 = a;
    console.log('from block scope, xsx3 :', xsx3);
  }
}

assignValueToUndeclaredVar();
console.log('from global scope, xsx2 : ', xsx2);
console.log('from global scope, xsx3 :', xsx3);

/* pass by value */
console.log('-----------pass by value-------------');

var b = 10;
var d = b;
console.log('d :', d);

function increment(num) {
  num = num + 1;
}

increment(d);

console.log('after increment, d :', d);

/* pass by reference */
console.log('-----------pass by reference-------------');

var employeeObj = {
  id: 100,
  name: 'Tushar',
  salary: 50000,
};

console.log('employeeObj :', employeeObj);

function doubleSalary(employeeObj) {
  employeeObj.salary = employeeObj.salary * 2;
}

doubleSalary(employeeObj);

console.log('after doubling salary, employeeObj :', employeeObj);

function changeObjectReference(employeeObj) {
  employeeObj = {
    id: 101,
    name: 'Ajay',
    salary: 30000,
  }; /* reference cannot be changed. This will create a new employeeObj referencing to Ajay employee */
  console.log(
    'after changing reference, employeeObj from inside the method:',
    employeeObj
  );
}

changeObjectReference(employeeObj);
console.log(
  'after changing reference, employeeObj :',
  employeeObj
); /* Still prints Employee Tushar object */
