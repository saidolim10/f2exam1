let num1 = +prompt('1-raqamni kiriting')

let operator = prompt('Tanlang: \n 1)+ \n 2)- \n 3)* \n 4)/')

let num2 = +prompt('2-raqamni kiriting') 

let container = document.getElementById("numbers");

let box1 = document.createElement("div");
box1.classList.add("box");
box1.textContent = num1;

const boxOp = document.createElement("div");
boxOp.classList.add("box");
boxOp.textContent = operator;

const box2 = document.createElement("div");
box2.classList.add("box");
box2.textContent = num2;

container.appendChild(box1);
container.appendChild(boxOp);
container.appendChild(box2);

document.getElementById("check-btn").addEventListener("click", () => {
    let res;
  
    if (operator == "+") {
      res = `${num1 + num2}`;
    } else if (operator == "-") {
      res = `${num1 - num2}`;
    } else if (operator == "*") {
      res = `${num1 * num2}`;
    } else if (operator == "/") {
        res = `${num1 / num2}`;
        } 
  
    document.getElementById("result").textContent = res;
  });