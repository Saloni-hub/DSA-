let arr = [10, 5, 20, 8];

// method 1
function getLargestNumber(arr){
    let maxElement = -Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i] > maxElement){
            maxElement = arr[i]
        }
    }
    return maxElement
}

// console.log(getLargestNumber(arr));

// method 2
function getLargestNumberIndex(arr){
    let res = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] > arr[res]){
            res = i
        }
    }
    return res
}

let index = getLargestNumberIndex(arr);
console.log(arr[index]);

// using redue

const largestNumber = arr.reduce((a,b) => {
    return Math.max(a,b)
})

console.log(largestNumber,"largestNumber");
