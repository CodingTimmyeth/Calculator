// Variable to show the Math on the DOM
const screen = document.querySelector('.screen')
// Variables for Buttons
const buttons = document.querySelectorAll('button')

console.log(buttons);

// Functions for Math Operations

const multiply = (a, b) => {return a * b}
const divide = (a, b) => {return a / b}
const add  = (a, b) => {return a + b}
const subtract = (a, b) => {return a - b}

// Function to reset the Screen
const resetCalculator = () => {
    screen.textContent = ''
}

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        console.log(button.innerText)
        screen.textContent += ` ${button.innerText}`
    })

  button.addEventListener('click', () => {
    if(button.value === 'equal'){
        console.log('run equal sign')
    }

    if(button.innerText === 'Clear'){
        resetCalculator()
    }
  })
})