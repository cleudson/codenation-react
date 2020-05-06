'use strict'

const fibonacci = () => {
    const sequence = [0,1];
    for(let i = 0; i<350; i++){
        sequence.push(sequence[i] + sequence[i+1]);
    }
    return sequence;
}
const arr = [0,1,...new Array(348)];
return arr.reduce((acc, curr, i, src) => {
  acc.push((curr == undefined) ?  acc[i-1] + acc[i-2] : curr);
  return acc;
}, [])


const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}