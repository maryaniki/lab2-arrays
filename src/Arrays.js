export function arraySorting(data) {
    let array = data.split(',');
    let numbers = array.map(Number);
    numbers.sort((a, b) => a - b);
    const result = numbers.join(',');
    return result;
}

export function arrayFiltering(data) {
    const result = data.filter((num) => num <= 100);
    return result;
}

export function arrayPushing(array1, array2) {
    const result = [];
    for (let i = 0; i < 5; i++) {
        result.push(array1[i]);
        result.push(array2[i]);
    }
    return result;
}
