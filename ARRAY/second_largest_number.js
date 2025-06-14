let arr = [10, 5, 18, 20];

function getSecondLargest(arr){
    let res = -1;
    let largest = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] > arr[largest]){
            res = largest
            largest = i;
        } else if(arr[i] != arr[largest]){
            if(res == -1 || arr[i] > arr[res]){
                res = i
            }
        }
    }
    return res
}

let index = getSecondLargest(arr)
console.log(arr[index])