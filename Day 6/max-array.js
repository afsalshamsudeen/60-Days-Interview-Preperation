function maxArray(arr){
    let max = 0;
    for (let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

const num = maxArray([3, 7, 2, 9, 5]);

console.log(num);