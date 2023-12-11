let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// Element 1

let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('click', function () {
  design.classList.toggle('design-flip')
})


// Element 2

let flow = document.querySelector('a:nth-of-type(8)')

flow.addEventListener('mouseover', function () {
  flow.classList.toggle('flow-rotate')
})


//  Element 3

let feedforward = document.querySelector('a:nth-of-type(16)')

feedforward.addEventListener('dblclick', function (){
  feedforward.hidden = true
})

// Element 4

let development = document.querySelector('a:nth-of-type(4)')

document.addEventListener('keydown', function(event) {
  console.log(event)
  if (event.key =="h") {
    development.classList.add('development-key')
  }
  if (event.key == "m") {
    development.classList.remove('development-key')
  }
})