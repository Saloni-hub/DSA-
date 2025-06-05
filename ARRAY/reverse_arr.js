let arr = [1, 2, 3, 4, 5];

export function reverseArr(arr,left,right){
    while(left < right){
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp

        left++;
        right--
    }
}


console.log(`Befor Reverse -> ${arr}`);
reverseArr(arr,0,arr.length-1);
console.log(`After Reverse -> ${arr}`);