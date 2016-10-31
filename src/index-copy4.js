// write a method names()
// which takes a string of
// comma-separated names
// (first and last)

// and
// returns an object where the
// firstname is a key, and the
// lastname is a value
//
// i.e. names("George Washington, John Adams, Kanye West")
//   .. --> {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }

function names(str){

  var newNames = {};
  var namesArray = str.split(', ');

  for (var i=0; i<namesArray.length; i++) {
      // console.log(namesArray[i]);

      var person = namesArray[i].split(' ')

      console.log (person[0]);
      var firstName = (person[0]);

      console.log (person[1]);
      var lastName = (person[1]);

      newNames.firstName = lastName;
      var namesList = {};


      namesList[firstName] = lastName;
      return namesList;
  }

};

console.log(names("George Washington"));
console.log(names("John Adams"));
console.log(names("Kanye West"));

var results = names ("George Washington, John Adams, Kanye West")
console.assert(results['George'] === "Washington")
console.assert(results['John'] === "Adams")
console.assert(results['Kanye'] === "West")
