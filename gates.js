// Write a program that implements logic gates AND, OR, NOT, NAND, NOR, XOR, and XNOR.

// const rl = require("readline");
// const prompts = rl.createInterface(process.stdin, process.stdout);

// prompts.question();

let x = 1,
  y = 1;

let testCases = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1]
];

const AND = (A, B) => {
  return (A == true) & (B == true) ? true : false;
};

const OR = (A, B) => {
  return (A == true) | (B == true) ? true : false;
};

const NOT = A => {
  return !A;
};

const NAND = (A, B) => {
  // NOT(A AND B)
  return !((A == true) & (B == true) ? true : false);
};

const NOR = (A, B) => {
  return !((A == true) | (B == true) ? true : false);
};

const XOR = (A, B) => {
  //  A XOR B = AND(A, (NOT B)) OR AND((NOT A)B)
  return OR(AND(A, NOT(B)), AND(NOT(A), B)) ? true : false;
};

const XNOR = (A, B) => {
  //  A XNOR B = OR(AND(A,B),(AND(NOT(A),NOT(B))))
  return OR(AND(A, B), AND(NOT(A), NOT(B))) ? true : false;
};

const executer = (GATE, X, Y = 0) => {
  let A = 0;
  let B = 1;
  let logicGate = {
    AND: AND(A, B),
    OR: OR(A, B),
    NOT: NOT(A),
    NAND: NAND(A, B),
    NOR: NOR(A, B),
    XOR: XOR(A, B),
    XNOR: XNOR(A, B)
  };

  return logicGate[GATE];
};

// testCases.forEach(el => {
//   console.log(XNOR(el[0], el[1]));
// });

console.log(executer(AND, 1, 1));
