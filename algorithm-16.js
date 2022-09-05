//? 구구단 표 만들기

// for(val=2; val<=9; val++){
//   for(count=1; count<=9; count++){
//     let multi = val*count;
//     let result = val +' x '+ count + ' = '+ multi;
//     // console.log(result);
//       if(val === 2){
//         console.log(result);
//     }
//   }
// }

//그냥 구구단 
// function gugudan(value, countVal){
//   let val = value;
//   let count = countVal;
//   if(val>=2 && val<=9){
//     if(count>=1 && count<=9){
//       let multi = val*count;
//       let result = val +' x '+ count + ' = '+ multi;
//       // console.log(result);
//       }
//     }
//   }
//   gugudan(4,2); 
  

//* 단수를 입력하면 1부터 9까지의 곱이 나타나는 구구단 -> 완료 
  // export default function gugudan(value){
  //   let resultArray = [];
  //   let val = value;
  //   if(val>=2 && val<=9){
  //     for(let count=1; count<=9; count++){
  //       let multi = val*count;
  //       let result = val +' x '+ count + ' = '+ multi;
  //       resultArray.push(result);
  //       }
  //     } return resultArray;
  //   }
  //   console.log(gugudan(4)); 
  

//* Q-2. 백엔드 요청 : "스텝측정을 해야하므로, 곱셈이 몇 회 일어났는지 변수 multiplyCounter에 산출해 주세요."
    const multiplyCounter = '?????';


//* Q-3. 실수(소숫점이 있는 수)를 위의 조건에 처리 했을 때 소숫점 첫번째 자리까지만 출력되도록 처리하세요. -> 완료(toFixed)

// function gugudan(value){
//   let resultArray = [];
//   let val = value;
//   if(val>=2 && val<=9){
//     for(let count=1; count<=9; count++){
//       let multi = val*count;
//       multi = multi.toFixed(1);
//       let result = val +' x '+ count + ' = '+ multi;
//       resultArray.push(result);
//       }
//     } return console.log(resultArray);
//   }
//   gugudan(4.3); 



//* Q-4. 음수(0보다 작은 수) 를 처리 했을 때 "절대값"이 출력되도록 처리하세요. -> 완료(abs)

// function gugudan(value, limit){
//   let resultArray = [];
//   let val = value;
//     for(let i=0; i<=limit; i++){
//       let multi = val*i;
//       multi = Math.abs(multi);
//       let result = val +' x '+ i + ' = '+ multi;
//       resultArray.push(result);
//       } return console.log(resultArray);
//     } 
//   gugudan(-2, 3); 


//* Q-5. 수열의 합, 시그마 로직을 구현하세요. (에를 들어 1단의 총 합계 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 합계) 

function gugudan(value, limit){
  let resultArray = [];
  let val = value;
    for(let i=0; i<=limit; i++){
      let multi = val*i;
      resultArray.push(multi);
      } console.log(resultArray);
      let result = resultArray.reduce(function add(sum, currVal){
        sum + currVal; //작업중...
      }, 0);
      console.log(result);
    } 
  gugudan(2, 9); 



//* Q-6. HTML에 나타난 구구단 중 항목 하나를 클릭하면 '클릭된 요소'가 삭제되도록 처리하세요.

//* Q-7. Q-6번 기능에 더해 삭제된 요소가 다섯번단위로 누적되면, 삭제된 요소의 결과값 총합을 경고창(alert())으로 보이게 조치하세요.



  //! q1. 강사참고답안 
  // function gugudanTwo(dan, limit) {
  //   let resultArr = [];
  //   for(let i=1; i<=limit; i++){
  //     resultArr.push(dan*i);
  //   }
  //   return resultArr;
  // }
  // console.log(gugudanTwo(2,9));


  