'use strict'

const fibonacci = () => {
    const sequence = [0,1];
    for(let i = 0; i<350; i++){
        sequence.push(sequence[i] + sequence[i+1]);
    }
    return sequence;
}
const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}