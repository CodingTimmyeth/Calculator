const screen = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')

let input = [];

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.innerText;

    if (!isNaN(value)) {
      input.push(value);
      screen.textContent += value;
    }

    if (['+', '-', '*', '/', '%'].includes(value)) {
      input.push(value);
      screen.textContent += ` ${value} `;
    }

    if (button.innerText === '=') {
      let result = null;
      let num1 = null;
      let operator = null;

      input.forEach((value) => {
        if (!isNaN(value)) {
          if (num1 === null) {
            num1 = parseInt(value);
          } else {
            switch (operator) {
              case '+':
                num1 += parseInt(value);
                break;
              case '-':
                num1 -= parseInt(value);
                break;
              case '*':
                num1 *= parseInt(value);
                break;
              case '/':
                num1 /= parseInt(value);
                break;
              case '%':
                num1 %= parseInt(value);
                break;
            }
          }
        } else {
          operator = value;
        }
      });

      screen.textContent = num1;
      input = [num1];
    }

    if (value === 'Clear') {
      screen.textContent = '';
      input = [];
    }
  });
});
