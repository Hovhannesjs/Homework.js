//1. Given an array of integers, find the pair of adjacent elements that has the largest product and
//return that product.

let arr = [1,2,6,9,45,7]
function theLargestProduct(arr){
  let x=0
    for(let i=0;i<arr.length;i++){
      if(arr[i]*arr[i+1]>x){
        x = arr[i]*arr[i+1]
      }
    }
    return x
}
theLargestProduct(arr)

//2. Given an array of integers. All numbers are unique. Find the count of missing numbers between
//minimum and maximum elements to make integers sequence.

let arr1 = [ 1, 2, 3, 5,];
function getMissingNo(arr1) {
       let total = Math.floor((arr1.length + 1) * (arr1.length + 2) / 2);
        for (let i = 0; i < arr1.length; i++){
        total -= arr1[i];
        }
     return total;
}
      
console.log(getMissingNo(arr1))

//3.Implement built in array sort method using bubble sort algorithm.
                            
let array=[1,3,4,6,2,5]
function mySort(fn){
        for (let i =0; i<this.length;i++){
            resultOfCallback = fn(this[i],i,this)
            if(!resultCallBack){
                     if (array[i + 1] < array[i]) {
                         let next = array[i + 1];
                         array[i + 1] = array[i];
                         array[i] = next;
                    }
            }
        }
    return array
}

//4. Insert a n positive number. Print the n-st prime number.

function isPrime(k){
    if (k <= 1)
        return 0
    if (k==2 || k==3)
        return 1
    if (k % 2 == 0 || k % 3 == 0)
        return 0
    for (let i = 5; i * i <= k; i = i + 6)
        if (k % i == 0 || k % (i + 2) == 0)
            return 0
  
    return 1
}

function nThPrime(n){
    let i =2
    while(n>0){
        debugger
        if(isPrime(i))
          n--
        i++
    }
    i-=1; 
    return i
}
console.log(nThPrime(6))