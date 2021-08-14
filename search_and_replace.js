function myReplace(str, before, after) {
    //after = after[0].toUpperCase();
    //console.log(after);
    var splittedString = str.split(' ');
  
      //uppercase letter container 
      var uppercasedLetter;
      
      //loop over each word
      splittedString.forEach((element, index)=>{
          //a match is found
          if(element === before){
           
              // checks if first letter is uppercased 
              if(element[0].toUpperCase() == element[0]){
  
                  uppercasedLetter = after[0].toUpperCase();                 
                  after = after.replace([after[0]], uppercasedLetter);
                  
                  //pull and place new word inside the array
                  splittedString.splice(index, 1, after);                            
              } else {
                  
                  //pull and place new word inside the array
                  uppercasedLetter = after[0].toLowerCase();                 
                  after = after.replace([after[0]], uppercasedLetter);
                  splittedString.splice(index, 1, after);       
              }
          }        
      });
  
      //turn the array into a string
      splittedString = splittedString.join(' ');
      
      str = splittedString;
      console.log(str);
  
      return str;
  }
  
  myReplace("I think we should look up there", "up", "Down");