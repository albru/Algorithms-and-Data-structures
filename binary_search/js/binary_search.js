const range = require('lodash/range');

const sequence = range(116226146);

const binary_search = (list, item) => {
    let low = 0;
    let high = list.length - 1;
    let attempts = 0;

    while (low <= high) {
        attempts++
        const mid = Math.floor((low + high) / 2)
        const guess = list[mid]

        if (guess === item) {
            console.log(`attempts: `, attempts)
            console.log(`result: `, mid)
            return mid
        }

        if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1
        }

    }

    return false;
}

console.log(binary_search(sequence, 123213))