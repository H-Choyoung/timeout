import gugudan from "./algorithm-16-module.js";

const root = document.getElementById('root');
root.textContent = '구구단을 외자..구구단을 외자..';

console.log(gugudan(5)); 

let d = [];
for(let i=2; i<=9; i++){
  let ul = document.createElement('ul');
  root.appendChild(ul);
  ul.textContent = i + '단';
  
  for(let j=0; j<=8; j++){
    let li = document.createElement('li');
    ul.appendChild(li);
    // console.log(gugudan(i)); //2단 ~ 9단
li.textContent = gugudan(i)[j];
}
}

//* Q-6. HTML에 나타난 구구단 중 항목 하나를 클릭하면 '클릭된 요소'가 삭제되도록 처리하세요.
let allLi = document.querySelectorAll('li');
// console.log(allLi); //72
for(let i=0; i<allLi.length; i++){
allLi[i].addEventListener('click', function(){
allLi[i].textContent = '';
});
}

//* Q-7. Q-6번 기능에 더해 삭제된 요소가 다섯번단위로 누적되면, 삭제된 요소의 결과값 총합을 경고창(alert())으로 보이게 조치하세요.
