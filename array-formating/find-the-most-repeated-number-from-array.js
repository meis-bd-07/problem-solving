// find the most repeated number

const inputs = [1, 2, 9, 3, 4, 3, 4, 6, 2, 3, 9, 2, 9, 7, 7, 9, 3, 7];

const findMostRepeatedJS = (numbers = []) => {
    const frequencies = {};
    let mostRepeated = null, maxCount = 0;
    for(let i = 0; i < numbers.length; i++){
        frequencies[numbers[i]] = (frequencies[numbers[i]] || 0) + 1;

        if (frequencies[numbers[i]] > maxCount) {
            maxCount = frequencies[numbers[i]];
            mostRepeated = numbers[i];
        }
    }
    return {
        number: mostRepeated,
        count: maxCount,
    };
};

console.log(findMostRepeatedJS(inputs))


// {
//     1: 1,
//     2: 1,
//     3: 3,
//     4: 1,
//     7: 3,
//     9: 1
// }

// set A: 0 // 2 -> 0
// set B: 0 // 4 -> 0
// set 7: 1
