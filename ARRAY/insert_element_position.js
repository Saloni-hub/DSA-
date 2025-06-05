function insertElementAtSpecificPosition(arr,position,element){
    for(let i=arr.length;i>position;i-- ){
        arr[i] = arr[i-1]
    }
    arr[position] = element
}

let arr = [1, 2, 3, 5];

console.log(`before insertion -> ${arr}`);
insertElementAtSpecificPosition(arr, 1, -4);
console.log(`After insertion -> ${arr}`);