import {reverseArr} from "./reverse_arr.js";

let arr = [1, 2, 3, 4, 5];
let k = 3

function reverseByK(arr,k){
    reverseArr(arr,0,k-1);
    reverseArr(arr,k,arr.length-1);
    reverseArr(arr,0,arr.length-1);

}

reverseByK(arr,k)

console.log(arr)