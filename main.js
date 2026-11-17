let a = 0;
let x = 0;
let y = 0;
let operator = "";
let decimal = 0;
let error = "";

let contentText = [];

const content = document.getElementById("content0");

const calculate = () => {
  if (operator === "+") {
    y = y + x;
  } else if (operator === "-") {
    y = y - x;
  } else if (operator === "*") {
    y = y * x;
  } else if (operator === "/") {
    y = y / x;
  }
};

const print = () => {
  content.textContent = "";
  for (let i = 0; i < contentText.length; i++) {
    content.textContent = content.textContent + contentText[i];
  }
};

const operatorCheck = () => {
  if (operator === "/" && x === 0 && a === 1) {
    error = "Error";
    x = 0;
    y = 0;
    a = 0;
    operator = "";
    decimal = 0;
    return true;
  }
  return false;
};

const clickButton = (number) => {
  if (decimal === 0) {
    if (a === 0) {
      x = 0;
    }
    x = x * 10 + number;
  } else {
    x = x + number / (decimal * 10);
    decimal = decimal * 10;
  }
  a = 1;
  contentText.push(number);
  print();
};

const del = () => {
  if (x === 0) {
    y = 0;
    a = 0;
    operator = "";
  } else {
    x = 0;
  }
  decimal = 0;
  contentText = [];
  content.textContent = "0";
};

const back = () => {
  if (decimal > 1) {
    x = x * decimal;
    x = (x - (x % 10)) / 10;
    decimal = decimal / 10;
    x = x / decimal;
    if (decimal === 1) {
      decimal = 0;
    }
  } else if (decimal === 1) {
    decimal = 0;
  } else {
    x = (x - (x % 10)) / 10;
  }
  let k = contentText.length - 1;
  contentText.splice(k, 1);
  print();
};

const Operator = (sign) => {
  operatorCheck();
  if (error === "Error") {
  } else {
    if (a === 1) {
      if (operator === "") {
        y = x;
      } else {
        calculate();
      }
      x = 0;
      a = 0;
    } else if (operator === "") {
      y = x;
    }
  }
  decimal = 0;
  operator = sign;
  contentText.push(sign);
  print();
};

const end = () => {
  if (error === "Error") {
    content.textContent = "Error";
    x = 0;
    y = 0;
    a = 0;
    operator = "";
    decimal = 0;
    error = "";
    return;
  }
  if (operator !== "" && a === 1) {
    calculate();
    x = y;
    y = 0;
    operator = "";
    a = 0;
  }
  decimal = 0;
  contentText = [];
  contentText.push(x);
  print();
};

const persent = () => {
  if (a === 1) {
    if (operator === "+" || operator === "-") {
      x = (y * x) / 100;
    } else {
      x = x / 100;
    }
    decimal = 0;
    contentText.push("%");
    print();
  }
};

const dot = () => {
  if (decimal === 0) {
    if (a === 0) {
      x = 0;
      a = 1;
      contentText.push("0.");
    } else {
      contentText.push(".");
    }

    decimal = 1;
  }
  print();
};

const swapSign = () => {
  x = x * -1;
};

input.addEventListener("keydown", (e) => {
  if (e.key === "1") clickButton(1);
});
