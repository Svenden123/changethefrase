var button = document.querySelector('button')
var h1 = document.querySelector('h1')
var input = document.querySelector('input')

function buttonHandler() {
    console.log('clicked!')
    h1.textContent = input.value
}

button.addEventListener('click',buttonHandler)
