function countOccurrences(arr) {
    const count = {};
    arr.forEach(num => {
        count[num] = (count[num] || 0) + 1;
    });
    return count;
}

const countCharOccurence =(str)=>{
const count={}
for (const iterator of str) {
    // count[iterator]
    count[iterator]= (count[iterator] || 0) +1
    console.log(iterator)
}
return count
}



const arr = [1, 2, 3, 4, 2, 1, 3, 5, 4, 4, 3, 2, 1, 1, 5];
const str = 'hello world'
// const result = countOccurrences(str.split(''));
// console.log(result);
// console.log(coun)
console.log( countCharOccurence(str))
