// 16/12/2019

// This week's question:
// Given a positive number N, generate binary numbers between 1 to N using a queue-type structure in linear time.

// Example:

// > binaryQueue(10)
// > 1 10 11 100 101 110 111 1000 1001 1010 1011 1100 1101 1110 1111 10000

let convertToBi = function(num) {
  let biBoard = [8, 4, 2, 1];
  let result = "";
  //   let num = 10;
  //   debugger;
  biBoard.forEach(n => {
    if (num >= n) {
      result += 1;
      num -= n;
    } else {
      result += 0;
    }
  });
  return result;
};

let generateBiQueue = (N, cb) => {
  let biQueue = [];
  let re = /^0+/g;
  for (let index = 1; index <= N; index++) {
    biQueue.push(cb(index).replace(re, ""));
  }

  return biQueue;
};

let answer = generateBiQueue(10, convertToBi);
answer.map(ele => console.log(ele, (end = "")));
