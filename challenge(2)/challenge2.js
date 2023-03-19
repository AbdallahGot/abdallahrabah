

//return the majority element.>>>>>>>>>>>>>
function getMajNum (arr){
  let maj = 0, count = 1;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] === arr[maj]) {
    count++
  }
   else {
    count--;
  }
  if (count === 0) {
    maj = i;
    count = 1;
  }
}
return arr[maj]
};
console.log(getMajNum([2,2,5,5,5,5,5,5,5,1,2]));