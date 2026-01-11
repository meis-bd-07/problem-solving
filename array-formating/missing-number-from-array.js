// find the missing number from sequential array

const inputs = [1, 3, 4, 6, 5];

function sumFromNtoM(n, m) {
  return ((m - n + 1) * (n + m)) / 2; // 0(1), 0(1)
}

const findMissingJS = (items = [], start = undefined, end = undefined) => {
    const total = items.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 0(n), 0(1)
    /* 
    note: 
        if initial value is not specified than, first accumulator = items[0], currentValue is = items[1] 
        if initial value is specified than, first accumulator = initial value, currentValue is = items[0] 
    */
    if(start && end){
        return sumFromNtoM(start, end) - total;
    }
    const length = items.length + 1
    return ((length * (length + 1)) / 2) - total; //(n * (n + 1)) / 2
};

/* js solution */
// console.log(findMissingJS(inputs)) //0(n), 0(1)

/* no js solution */
const findMissingNonJS = (items = []) => {
    const length = items.length + 1
    const grandTotal = (length * (length + 1)) / 2;

    let total = 0;
    for(let i = 0; i < items.length; i++){
        total += items[i];
    }
    return grandTotal - total;
}

console.log(findMissingNonJS(inputs)) //0(n), 0(1)

