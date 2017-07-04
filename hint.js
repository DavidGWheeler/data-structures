'use strict';

function openOrSenior(data){
  let result = [];
  console.log(result);
  for (let i = 0; i < data.length; i++) {
      if(data[i][0] < 54) {
        result.push('Open');
      } else if(data[i][0] > 54) {
        if (data[i][1] >= 7) {
        result.push('Senior');
      } else {
        result.push('Open');
    }
   }
  }
  return result;
}
