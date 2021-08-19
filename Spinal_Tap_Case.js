// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

function spinalCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\s+|_+/g, '-').toLowerCase();
  }
  
  spinalCase('This Is Spinal Tap');