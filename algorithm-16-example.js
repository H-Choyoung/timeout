//? 구구단 표 만들기 : 답안지

function gugudanCore(dan, limit) {
  let stepCount = 0;
  let resultArray = [];
  //초기화
  for(let i=1; i<=limit; i++){
    let calc = dan*i;
    //multyply

    //* Q-3. 실수(소숫점이 있는 수)를 위의 조건에 처리 했을 때 소숫점 첫번째 자리까지만 출력되도록 처리하세요.
    if(Number.isInteger(calc) === false) {
      calc = calc.toFixed(1);
    }
    //integer inspection 
    //Number.isInteger()는 주어진 값이 정수인지 판별한다. 
    //toFixed는 숫자를 고정 소수점 표기법으로 표시한다.(1일때 : 소수점 아래 1까지)

    //* Q-4. 음수(0보다 작은 수) 를 처리 했을 때 "절대값"이 출력되도록 처리하세요.
    if(calc < 0 && i === limit) {
      console.log(Math.abs(calc));
    }
    //absolute value and max value
    //? 조건에 왜 i === limit이 붙는걸까? 

    resultArray.push(calc);
    stepCount++;
  }
  //* Q-5. 수열의 합, 시그마 로직을 구현하세요. (에를 들어 1단의 총 합계 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 합계) 
  let reduceResult = resultArray.reduce(function(prev, curr){
    return parseFloat(prev) + parseFloat(curr);
  });
  //reduce, get Value
  console.log(`시그마 값 :${reduceResult}`);
  console.log(`총 ${stepCount}번 실행`);
  return resultArray;
}
console.log(gugudanCore(-3.2, 9));


//* Q-2. 백엔드 요청 : "스텝측정을 해야하므로, 곱셈이 몇 회 일어났는지 변수 multiplyCounter에 산출해 주세요."

//* Q-6. HTML에 나타난 구구단 중 항목 하나를 클릭하면 '클릭된 요소'가 삭제되도록 처리하세요.

//* Q-7. Q-6번 기능에 더해 삭제된 요소가 다섯번단위로 누적되면, 삭제된 요소의 결과값 총합을 경고창(alert())으로 보이게 조치하세요.


  