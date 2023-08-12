//1.
// Same keys and values
// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

// refactoring
const createInstructor = (firstName, lastName) => ({firstName, lastName});

//2.
// Computed Property Names
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

// refactored

let favoriteNumber = 42;
const instructor = {
    firstName: "colt",
    [favoriteNumber]: "that is my favorite!"
}

//3. 

//Object Methods

// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

// refactored

let instructor2 = {
    firstName: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + "says bye!";
    }
}

//4.
// ## **createAnimal function**

// Write a function which generates an animal object. The function should accepts 3 arguments:

// - species: the species of animal (‘cat’, ‘dog’)
// - verb: a string used to name a function (‘bark’, ‘bleet’)
// - noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

// Use one or more of the object enhancements we’ve covered.

// const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// // {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){ 
      return noise;
    }
  }
}

const createAnimal = (species, verb, noise) => {
    return {  // returns an object
        species, // setting species key and val
        [verb](){ // creating a new function using the verb 
            return noise //returning noise
        }
    }
}