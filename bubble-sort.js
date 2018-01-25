let testArr = [7,3,9,4,3,5]
let newArr = testArr;
let newSlice, temp1, temp2;
let i = 0;

let swap = function(){
  temp1 = testArr[i];
  temp2 = testArr[i+1];
  newArr[i] = temp2
  newArr[i+1] = temp1
  i = 0;
}

while (i<testArr.length){
if(testArr[i]>testArr[i+1]){
  swap()
  }else{
    i++
  }
}
console.log('test array', newArr)