function fibs(number) {
    let result = []
    for (let index = 0; index < number; index++) {
        if (index === 0) {
            result.push(0)
        } else if(index === 1) {
            result.push(1)
        } else {
            result.push(result[index-1] + result[index-2])
        }
    }
    return result
}

console.log(fibs(8));

function fibsRec(n) {
    if(n === 1) return [0];
    if(n === 2) return [0,1];

    return [...fibsRec(n - 1), fibsRec(n-1)[n-2] + fibsRec(n-2)[n-3]]
}

console.log(fibsRec(8));