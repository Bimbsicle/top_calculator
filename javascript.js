function add(x,y) {
    ans = Math.round((parseFloat(x) + parseFloat(y))*100)/100
    return ans
}

function subtract(x,y) {
    ans = Math.round((parseFloat(x) - parseFloat(y))*100)/100
    return ans
}

function multiply(x,y) {
    ans = Math.round((parseFloat(x) * parseFloat(y))*100)/100
    return ans
}

function divide(x,y) {
    console.log(y)
    if (y == 0 || y =="0") {
        clear()
        ans = "Error 1"
        return ans
    }
    else {
        ans = Math.round((parseFloat(x) / parseFloat(y))*100)/100
        return ans 
    }
}

function operate(operator,x,y) {
    if (currentOperation == ""){
        ans = y
    }
    else{
        switch (operator) {
            case "*":
                ans = multiply(x,y)
                break;
            case "+":
                ans = add(x,y)
                break;
            case "-":
                ans = subtract(x,y)
                break;
            case "/":
                ans = divide(x,y)
                break;
        }
    }
}

function clear(){
    display.innerHTML = ""
    solution.innerHTML = ""
    equalsPressed = true
    operatorPressed = false
    decimalPressed = false
    value1 = ""
    value2 = ""
}

let value1 = ""
let value2 = ""
let ans = ""
let operatorPressed = false
let equalsPressed = true
let currentOperation = ""
let decimalPressed = false
let currentSolution = ""

const display = document.querySelector('.main-display')
const solution = document.querySelector('.solution')
const numberbtns = document.querySelectorAll('.number')
const operatorbtns = document.querySelectorAll('.operator')
const equalsbtn = document.querySelector('.equals')
const clearbtn = document.querySelector('.clear')
const percentbtn = document.querySelector('.percent')
const negatebtn = document.querySelector('.negate')
const decimalbtn = document.querySelector('.period')

numberbtns.forEach(numberbtn => {
    numberbtn.addEventListener('click', function(e){
        if (equalsPressed == true){
            display.innerHTML = e.target.innerHTML
            equalsPressed = false
            decimalPressed = false
        }
        else {
            display.innerHTML += e.target.innerHTML 
        }
    })
});

operatorbtns.forEach(operatorbtn => {
    operatorbtn.addEventListener('click', function(e){
        if (operatorPressed == true) {
            value2 = display.innerHTML
            operate(currentOperation, value1, value2)
            currentOperation = String(e.target.innerHTML)
            solution.innerHTML = `${ans} ${currentOperation}`
            display.innerHTML = ""
            value1 = ans
            equalsPressed = true
        }
        else {
            value1 = display.innerHTML
            currentOperation = String(e.target.innerHTML)
            currentSolution = `${value1} ${currentOperation}`
            solution.innerHTML =  currentSolution
            equalsPressed = true
            operatorPressed = true
        }
    })
});

equalsbtn.addEventListener('click', function(){
    value2 = display.innerHTML
    operate(currentOperation, value1, value2)
    solution.innerHTML = `${value1} ${currentOperation} ${value2} = ${ans}`
    display.innerHTML = ans
    equalsPressed = true
    operatorPressed = false
    value1 = ""
    value2 = ""
    currentOperation = ""
    decimalPressed = false
})

clearbtn.addEventListener('click', clear)

percentbtn.addEventListener('click', () => {
    if (Number.isInteger(display.innerHTML) == false){
        clear()
        display.innerHTML = "Error 3"
    }
    else {
        display.innerHTML *= 0.01
    }
})

negatebtn.addEventListener('click', () => {
    if (Number.isInteger(display.innerHTML) == false){
        clear()
        display.innerHTML = "Error 3"
    }
    else {
        display.innerHTML *= -1
    }
})

decimalbtn.addEventListener('click', function(e){
    if (equalsPressed == true){
        display.innerHTML = "0."
        equalsPressed = false
    }
    else if (decimalPressed == true){

    }
    else {
        display.innerHTML += e.target.innerHTML
        decimalPressed = true
    }
})
