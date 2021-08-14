function bouncer(arr) {
    return arr.filter(function (elem) {
      return Boolean(elem);
    })
  }
  
  bouncer([7, "ate", "", false, 9]);