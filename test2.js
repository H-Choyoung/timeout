
// setTimeout(function(){
//   console.log('a');
// }, 1000);

// setTimeout(function(){
//   console.log('b');
// }, 2000);

console.log('a');
setTimeout(function(){
  console.log('b');
}, 3);
setTimeout(function(){
  console.log('c');
}, 0);
//a c b 순서로 실행됨
//몇 초든 간에 setTimeout이 붙으면 따로 관리된다
