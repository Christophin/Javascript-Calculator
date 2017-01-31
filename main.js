var clearButton = document.getElementById("clear");
var displayBox = document.getElementById("display")
var sevenButton = document.getElementById("seven");
var eightButton = document.getElementById("eight");
var nineButton = document.getElementById("nine");
var divideButton = document.getElementById("divide");
var fourButton = document.getElementById("four");
var fiveButton = document.getElementById("five");
var sixButton = document.getElementById("six");
var multiplyButton = document.getElementById("multiply");
var oneButton = document.getElementById("one");
var twoButton = document.getElementById("two");
var threeButton = document.getElementById("three");
var subtractButton = document.getElementById("subtract");
var zeroButton = document.getElementById("zero");
var decimalButton = document.getElementById("decimal");
var equalButton = document.getElementById("equal");
var plusButton = document.getElementById("plus")

var left = "";
var operator = "";
var right = "";
// var left, right, operator

function buildDisplay () {
  displayBox.innerHTML = left + " " + operator + " " + right;
};

function clearClick () {
  left = "";
  operator = "";
  right = "";
  buildDisplay();
};

function doCalculation ()  {
  if (operator === "+") {
    left = Number(left) + Number(right);
  } else if (operator === "-")  {
    left = Number(left) - Number(right);
  } else if (operator === "*")  {
    left = Number(left) * Number(right);
  } else if (operator === "/")  {
    left = Number(left) / Number(right);
  };
  right = "";
  buildDisplay();
}

function sevenClick ()  {
  if (operator === "") {
    left += "7";
    buildDisplay();
  } else {
    right += "7";
    buildDisplay();
  };
};

function eightClick ()  {
  if (operator === "") {
    left += "8";
    buildDisplay();
  } else {
    right += "8";
    buildDisplay();
  };
};

function nineClick ()  {
  if (operator === "") {
    left += "9";
    buildDisplay();
  } else {
    right += "9";
    buildDisplay();
  };
};

function fourClick ()  {
  if (operator === "") {
    left += "4";
    buildDisplay();
  } else {
    right += "4";
    buildDisplay();
  };
};

function fiveClick ()  {
  if (operator === "") {
    left += "5";
    buildDisplay();
  } else {
    right += "5";
    buildDisplay();
  };
};

function sixClick ()  {
  if (operator === "") {
    left += "6";
    buildDisplay();
  } else {
    right += "6";
    buildDisplay();
  };
};

function oneClick ()  {
  if (operator === "") {
    left += "1";
    buildDisplay();
  } else {
    right += "1";
    buildDisplay();
  };
};

function twoClick ()  {
  if (operator === "") {
    left += "2";
    buildDisplay();
  } else {
    right += "2";
    buildDisplay();
  };
};

function threeClick ()  {
  if (operator === "") {
    left += "3";
    buildDisplay();
  } else {
    right += "3";
    buildDisplay();
  };
};

function zeroClick ()  {
  if (operator === "") {
    left += "7";
    buildDisplay();
  } else {
    right += "7";
    buildDisplay();
  };
};

function plusClick () {
  if (operator === "")  {
    operator = "+";
  } else  {
      doCalculation();
      operator = "+";
  };
  buildDisplay();
};

function subtractClick () {
  if (operator === "")  {
    operator = "-";
  } else {
    doCalculation();
    operator = "-";
  };
  buildDisplay();
};

function multiplyClick () {
  if (operator === "")  {
    operator = "*";
  } else {
    doCalculation();
    operator = "*";
  };//this guy is in charge of buildDisplay TODO
  buildDisplay();
};


function divideClick () {
    if (operator === "/") {
      operator = "/";
    } else {
      doCalculation();
      operator = "/"
    };
    buildDisplay();
};

function equalClick ()  {
  doCalculation ();
  operator = "";
  buildDisplay();
}

function decimalClick ()  {
  if (operator === "")  {
    left += ".";
  } else {
    right += ".";

  }
  buildDisplay();
}

clearButton.addEventListener('click', clearClick);
sevenButton.addEventListener('click', sevenClick);
eightButton.addEventListener('click', eightClick);
nineButton.addEventListener('click', nineClick);
divideButton.addEventListener('click', divideClick);
fourButton.addEventListener('click', fourClick);
fiveButton.addEventListener('click', fiveClick);
sixButton.addEventListener('click', sixClick);
multiplyButton.addEventListener('click', multiplyClick);
oneButton.addEventListener('click', oneClick);
twoButton.addEventListener('click', twoClick);
threeButton.addEventListener('click', threeClick);
subtractButton.addEventListener('click', subtractClick);
zeroButton.addEventListener('click', zeroClick);
decimalButton.addEventListener('click', decimalClick);
equalButton.addEventListener('click', equalClick);
plusButton.addEventListener('click', plusClick);
