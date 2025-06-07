function removeDuplicate(arr){
    let n = arr.length;
    let temp = []

    for(let i=0;i<n;i++){
        if(arr[i] != arr[i+1]){
            temp.push(arr[i]);
        }
    }
    return temp;

}

let arr = [0, 20, 20, 30, 30, 30, 30];

let dup = removeDuplicate(arr)
console.log(dup);
