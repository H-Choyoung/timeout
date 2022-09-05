// setTimeout(function() {
//   console.log('a');

//   setTimeout(function() {
//     console.log('b');

//     setTimeout(function(){
//       console.log('c');
//     },1000);
//   }, 1000);
// }, 1000);
//1. 타이머는 함수 내 동작을 한 번에 실행한다. 
//2. a -> b로 실행된다. 


setTimeout(function() {
  console.log('a');
  setTimeout(function() {
    console.log('b');
    setTimeout(function() {
      console.log('c');
      setTimeout(function() {
        console.log('d');
        setTimeout(function() {
          console.log('e');
          setTimeout(function() {
            console.log('f');
            setTimeout(function() {
              console.log('g');
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 1000);
}, 3000);
