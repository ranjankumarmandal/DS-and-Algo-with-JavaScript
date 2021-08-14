function translatePigLatin(str) {
    const regex = /^[^aeiou]+/g;
    const consonants = str.match(regex);
    if (consonants == null) {
      str = str.concat('way');
    }
    else {
      str = str.replace(regex, '').concat(consonants).concat('ay');
    }
    return str;
  }
  
  translatePigLatin("algorithm");