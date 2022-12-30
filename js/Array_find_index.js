//Array_findindex()

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

document.write(array1.findIndex(isLargeNumber));
// expected output: 3
