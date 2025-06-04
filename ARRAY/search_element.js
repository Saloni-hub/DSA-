// search element index inside array

const arr = [20, 5, 7, 25];
target = 7
function searchElementIndex(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}

console.log(searchElementIndex(arr,target))


// search element index in sorted array

const sortedArr = [3,4,5,6,12,32,45]
x = 32

function binarySearch(arr,target){
    let left = 0
    let right = arr.length - 1;
    while(left < right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid] === target){
            return mid
        } else if(arr[mid] < target){
            left = mid + 1
        } else {
            right = mid-1
        }
    }
}

console.log(binarySearch(sortedArr,x))