/** OBJECT CREATION */

const user = {
  id: 343434343,
  firstName: "Billy",
  lastName: "Goat",
  preferences: { theme: "dark", subscribed: true }
};

// The example above is more performant than:
const newUser = new Object();
newUser.id = 343434343;
newUser.firstName = "Billy";
newUser.lastName = "Goat";
newUser.preferences = new Object();
newUser.preferences.theme = "dark";
newUser.preferences.subscribed = true;

console.log("user", user);
document.getElementById("user1").innerHTML = JSON.stringify(user)
//   "user" Object {
//     firstName: "Billy",
//     id: 343434343,
//     lastName: "Goat",
//     preferences: Object {
//       subscribed: true,
//       theme: "dark"
//     }
//   }
console.log("newUser", newUser);
document.getElementById("user2").innerHTML = JSON.stringify(newUser)
//   "newUser" Object {
//     firstName: "Billy",
//     id: 343434343,
//     lastName: "Goat",
//     preferences: Object {
//       subscribed: true,
//       theme: "dark"
//     }
//   }


/* Object Properties */

//You can key off of object properties in a few ways in javascript:
const themeChoice = user.preferences.theme
console.log(themeChoice)
// 'dark'

const userPrefs = user['preferences']
console.log(userPrefs)
// Object {
//   subscribed: true,
//   theme: dark
// }

/* Object methods are properties that contain functions */

// Strings contain inherit methods
const string = 'this is a cool string'
console.log(string.includes('cool'))
// true

// Let's make a method on our user that returns their full name
user.fullName = function() {
  return this.firstName + ' ' + this.lastName
}
console.log(user.fullName())
// "Billy Goat"

/** INHERITANCE AND INSTANTIATION **/

const arr = [];
console.log(arr.__proto__);
// outputs methods on prototype inherit from Array()

const obj = [];
console.log(obj.__proto__);
// outputs methods on prototype inherit from Object()

function Actor(name, role) {
  this.name = name;
  this.role = role;
}

function Fighter(name, weapon) {
  // chain constructor
  Actor.call(this, name, "fighter");
  // new Fighter property
  this.weapon = weapon;
}

// Copy prototypes
Fighter.prototype = Object.create(Actor.prototype);

// Add method to Actor prototype
Actor.prototype.sayHello = function() {
  return `The ${this.role} ${this.name} says 'greetings!'.`;
};

// Add method to Fighter prototype
Fighter.prototype.lunge = function() {
  return `${this.name} lunged forward with his ${this.weapon}!`;
};

let minstrel = new Actor("Freddy", "minstrel");
console.log(minstrel.sayHello());
document.getElementById('actor').innerHTML = minstrel.sayHello()
// "The minstrel Freddy says 'greetings!'."

const philip = new Fighter("Philip", "sword");
console.log(philip.lunge());
// "Philip lunged forward with his sword!"

// This sayHello prototype is not inherited unless we link the prototypes like above
console.log(philip.sayHello());
// "The fighter Philip says 'greetings!'."

console.log(philip.lunge())
// "Philip lunged forward with his sword!"

// This sayHello prototype is not inherited unless we link the prototypes like above
console.log(philip.sayHello())
// "The fighter Philip says 'greetings!'."
