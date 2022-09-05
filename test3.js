//1초 주기로 계속 실행한다
setInterval(function(){
  let num = 0;
  num++
  // console.log(num);
}, 1000);
//△계속 1이 출력된다

let num = 0;
const a = setInterval(function(){
  num++
  // console.log(num);
  if(num === 10) {
    clearInterval(a);
  }
}, 1000);
//△숫자가 순서대로 실행된다. 

let nums = 0;
const b = setInterval(function(){
  nums++
  console.log(nums);
  if(nums === 60) {
    clearInterval(b);
  }
}, 16);
//△60프레임