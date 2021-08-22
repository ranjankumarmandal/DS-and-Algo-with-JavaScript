// sort () in JS   or     sort comparator in JS

const objectArr = [ 
    { first_name: 'Lazslo', last_name: 'Jamf'     },
    { first_name: 'Pig',    last_name: 'Bodine'   },
    { first_name: 'Pirate', last_name: 'Prentice' }
];

const comparator = (a,b) => {
    if(a.last_name < b.last_name){
        return -1;
    } else if(a.last_name > b.last_name){
        return 1;
    } else {
      return 0;
    }
}
console.log(objectArr.sort(comparator));

// desc based on lasyt_name