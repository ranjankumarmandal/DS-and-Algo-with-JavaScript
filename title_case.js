function titleCase(str) {
    let newArr = [];
    let strArr = str.toLowerCase().split(' ');
    for (let i = 0; i < strArr.length; i++) {
      newArr.push(strArr[i][0].toUpperCase() + strArr[i].substring(1));
    }
    return newArr.join(' ');
  }
  
  titleCase("I'm a little tea pot");