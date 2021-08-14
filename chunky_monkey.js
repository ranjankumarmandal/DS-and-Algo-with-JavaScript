function chunkArrayInGroups(arr, size) {
    for (let i = 0; i < arr.length; i++) {
      let toSplice = arr.splice(i, size);
      arr.unshift(toSplice);
    }
    return arr.reverse();
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);