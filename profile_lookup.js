// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop) {
  // Only change code below this line
  var msg = 'No such contact';

  for (var p in contacts) {
    if (contacts[p].firstName === firstName && contacts[p].hasOwnProperty(prop)) {
      msg = contacts[p][prop];
    } else if (!contacts[p].hasOwnProperty(prop)) {
        if (contacts[p].firstName === firstName) {
            msg = 'No such property';
        }
      
    } 
  }
  //console.log(msg);

  return msg;
  // Only change code above this line
}

lookUpProfile("Bob", "potato");