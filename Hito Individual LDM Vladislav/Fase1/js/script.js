const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')

const display = calculator.querySelector('.calculator__display')

const operators = {
  '+': '+',
  '-': '-',
  '*': '&times;',
  '/': '&divide;'
};

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent

        if (
          action === 'add' ||
          action === 'subtract' ||
          action === 'multiply' ||
          action === 'divide' ||
          action === 'porcentaje' ||
          action === 'cuadrado' ||
          action === 'raiz'
        ) {
            console.log('operator key!')
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
        }

        if (action === 'decimal') {


            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.'
              } else if (previousKeyType === 'operator') {
                display.textContent = '0.'
              }

            console.log('decimal key!')
            display.textContent = displayedNum + '.'
            calculator.dataset.previousKey = 'decimal'
          }
          
          if (action === 'clear') {
            if (key.textContent === 'AC') {
                calculator.dataset.firstValue = ''
                calculator.dataset.modValue = ''
                calculator.dataset.operator = ''
                calculator.dataset.previousKeyType = ''
              } else {
                key.textContent = 'AC'
              }
            display.textContent = 0
            
            console.log('clear key!')
            calculator.dataset.previousKeyType = 'clear'

          }
          
          if (action === 'calculate') {
            console.log('equal key!')
            calculator.dataset.previousKeyType = 'calculate'
          }
          if (action === 'porcentaje') {
            console.log('porcentaje key!')
            calculator.dataset.previousKeyType = 'porcentaje'
          }

          if (action === 'cuadrado') {
            console.log('cuadrado key!')
            calculator.dataset.previousKeyType = 'cuadrado'
          }

          if (action === 'raiz') {
            console.log('raiz key!')
            calculator.dataset.previousKeyType = 'raiz'
          }
        
          if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
          ) {
            key.classList.add('is-depressed')
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
          }

          const previousKeyType = calculator.dataset.previousKeyType

          if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator') {
              display.textContent = keyContent
            } else {
              display.textContent = displayedNum + keyContent
            }
            calculator.dataset.previousKey = 'number'
            console.log('number key!')
          }

          if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum
            display.textContent = calculate(firstValue, operator, secondValue)
          }

          if (action === 'porcentaje') {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            display.textContent = porcentaje(firstValue, operator)
          }

          if (action === 'cuadrado') {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            display.textContent = cuadrado(firstValue, operator)
          }
          
          if (action === 'raiz') {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            display.textContent = raiz(firstValue, operator)
          }

          if (action !== 'clear') {
            const clearButton = calculator.querySelector('[data-action=clear]')
            clearButton.textContent = 'CE'
          }

        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'))
    }
})

const calculate = (n1, operator, n2) => {
    const firstNum = parseFloat(n1)
    const secondNum = parseFloat(n2)
    if (operator === 'add') return firstNum + secondNum
    if (operator === 'subtract') return firstNum - secondNum
    if (operator === 'multiply') return firstNum * secondNum
    if (operator === 'divide') return firstNum / secondNum
  }

const porcentaje = (n1, operator) => {
   const firstNum = parseFloat(n1)
   if (operator === 'porcentaje') return firstNum / 100
  }

const cuadrado = (n1, operator) => {
   const firstNum = parseFloat(n1)
   if (operator === 'cuadrado') return firstNum * firstNum
  }

const raiz = (n1, operator) => {
   const firstNum = parseFloat(n1)
   if (operator === 'raiz') return Math.sqrt(firstNum)
  }
