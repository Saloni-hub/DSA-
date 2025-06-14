let arr = [0, 8, 5, 0, 0, 10, 0, 20];

// method 1
// function allZeroesEnd(arr){
//     let j = 0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] != 0){
//             arr[j] = arr[i];
//             j++;
//         } 
//     }    

//     while(j < arr.length){
//         arr[j] = 0
//         j++
//     }
//     return arr
// }

function allZeroesEnd(arr){
    let j = 0
    for(let i=0;i<arr.length;i++){
        // swap method
        if(arr[i] != 0){
          let temp = arr[i]
          arr[i] = arr[j]
          arr[j] = temp
          j++
        } 
    }    
return arr

}
console.log(allZeroesEnd(arr))
