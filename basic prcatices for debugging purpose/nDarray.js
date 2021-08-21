const obj = {
    name : "Ranjan",
    address : "Bangalore",
    country : "India"
  };
  
  console.log(obj);
  //{name: "Ranjan", address: "Bangalore", Country: "India"}
  
  //JSON.parse(obj);        ----> this will give an error, JSON parsing can be done for stringied version of JSON
  // VM234:1 Uncaught SyntaxError: Unexpected token o in JSON at position 1
  //     at JSON.parse (<anonymous>)
  //     at <anonymous>:1:6
  // (anonymous) @ VM233:1
  
  console.log(JSON.stringify(obj));
  // "{\"name\":\"Ranjan\",\"address\":\"Bangalore\",\"Country\":\"India\"}"
  
  console.log(JSON.parse("{\"name\":\"Ranjan\",\"address\":\"Bangalore\",\"Country\":\"India\"}"));
  // {name: "Ranjan", address: "Bangalore", Country: "India"}
  
  // Multidimensional Array (or nD array) => these array within array
  //=> Any number of rows any number of columns, eg - arr[n][m];
  let arr = [
    [1, 2, 3],
    [11, 22, 33],
    [111, 222, 333],
    ['abc',123, 134, [14, 'ranjan', 'kumar', 'mandal', 19]]
  ];
  
  console.log(arr);
  console.log(arr[3]);
  console.log(arr[0][2]);
  console.log(arr[3][3][1]);
  
  //matrix and nD array are not same, nD array have similar comumns with number but nD array may not
  // Square Matrix => these are the matrix with same number of row and columns, eg - ar[n][n];
  
  const matrix = [
    [1, 2, 3],
    [11, 22, 33],
    [111, 222, 333]
  ];
  console.log(matrix.length);       // => row number
  console.log(matrix[0].length);    // => column number
  
  // Advance Array / String methods
  // split a given string into multiple parts and store them in an array using split()
  let str = "My country is India";
  console.log(str.split(""));
  console.log(str.split(" "));
  
  // join an array to form a string using join()
  const arr1 = [ 'My', 'country', 'is', 'India' ];
  console.log(arr1.join(""));
  console.log(arr1.join(" "));
  
  //for loop
  for(let i = 0; i < 5; i++) {
    console.log("Ranjan");
  }
  
  // while loop
  let i = 0;
  while(i < 5) {
    console.log(i);
    i++;
  }
  
  // do while loop
  let j = 0;
  do {
    console.log("I am inside do while loop");
    j++;
  } while(j < 5);