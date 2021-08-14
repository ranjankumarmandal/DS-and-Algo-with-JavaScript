function pairElement(str) {
    let pairs = [];
    str.split('').map(elem => {
      if (elem === 'G') {
        pairs.push(['G', 'C'])
      }
      else if (elem === 'C') {
        pairs.push(['C', 'G'])
      }
      else if (elem === 'A') {
        pairs.push(['A', 'T'])
      }
      else if (elem === 'T') {
        pairs.push(['T', 'A'])
      }
    })
    return pairs;
  }
  
  pairElement("GCG");