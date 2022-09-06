  //구구단 함수
  export default function gugudan(value){
    let resultArray = [];
    let val = value;
    if(val>=2 && val<=9){
      for(let count=1; count<=9; count++){
        let multi = val*count;
        let result = val +' x '+ count + ' = '+ multi + ' ';
        resultArray.push(result);
        }
      } return resultArray;
    };
