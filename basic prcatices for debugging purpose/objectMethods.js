const obj = {
    name : "ranjan",
    address : "india",
    price : [1, 4, 2, 5]  
  };
  
  console.log(Object.keys(obj));                    // O(n)
  console.log(Object.values(obj));                  // O(n)
  console.log(Object.entries(obj));                 // O(n)
  console.log(obj.hasOwnProperty("name"));          // O(1)