/** VARIABLES **/

// I am immutable
const foo = 1;
/**
 * Error when trying to manipulate const
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_const_assignment
 **/
// This is commented out so this file can run
// foo += 1

// I am mutable
let bar = 1;
bar += 1;

console.log(bar);
// 2

/** FOR LOOPS **/

/** For loop  **/

const concepts = [
  'Loops',
  'Conditional Statements',
  'Functions',
  'Variables',
  'Parameters',
  'Arrays',
  'Associative Arrays',
];
let newString = '';

/** This for loop allows traversing arrays/objects in reverse order **/
for (var i = concepts.length - 1; i >= 0; i--) {
  newString += concepts[i];
  // Put a comma between all but last item
  if (i !== 0) {
    newString += ', ';
  }
}
// "Associative Arrays, Arrays, Parameters, Variables, Functions, Conditional Statements, Loops"
console.log('newString', newString);

/**
 * This could also be done using the Array.join method. Much cleaner.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 **/

 const newString2 = concepts.reverse().join(', ');
// "Associative Arrays, Arrays, Parameters, Variables, Functions, Conditional Statements, Loops"

const reverseBtn = document.getElementById('reverse');
reverseBtn.onclick = () => {
    document.getElementById('output').innerHTML = concepts.reverse().join();
}

const forwardBtn = document.getElementById('forward');
forwardBtn.onclick = () => {
    document.getElementById('output').innerHTML = newString;
}

/** For/in loop **/

const students = {
  suzie: {
    age: 18,
  },
  stan: {
    age: 20,
  },
  marco: {
    age: 19,
  },
  polo: {
    age: 17,
  },
};

let classAges = [];
/** for loop using shorthand **/
const getAges = () => {
  for (var s in students) {
    classAges.push(students[s].age);
  }
  document.getElementById('ages-output').innerHTML = classAges;
};
// [18, 20, 19, 17]
console.log('ages', classAges);

document.getElementById('getAges').onclick = getAges;
