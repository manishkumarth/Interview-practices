// move zero to ends 

function moveZero(arr) {
    let j = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            console.log(j, i)
            j++
        }

    }
    return arr
}
console.log(moveZero([1, 0, 2, 0, 0, 4, 3, 6, 0]))

function moveZeroToEnd(arr) {
    let j = arr[arr.length-1];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            console.log(j, i)
            j--
        }

    }
    return arr
}

console.log(moveZeroToEnd([1, 0, 2, 0, 0, 4, 3, 6, 0]))





let arr = [1, 0, 2, 0, 0, 4, 3, 6, 0]
let max = arr[0]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}

console.log(max)