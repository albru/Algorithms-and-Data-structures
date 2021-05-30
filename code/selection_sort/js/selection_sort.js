const arr = [8, 23, 2, 14, 6, 9, 132];

const selection_sort = (inputArr) => {
    let arrLength = inputArr.length;

    for (let i = 0; i < arrLength; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arrLength; j++) {
            if (inputArr[j] < inputArr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            const tmp = inputArr[i];
            inputArr[i] = inputArr[minIndex];
            inputArr[minIndex] = tmp;
        }
    }
    return inputArr;
}

console.log(`selection_sort(arr)`, selection_sort(arr))