let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// Element 1 click

let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('click', function () {
  design.classList.toggle('design-flip')
})


// Element 2 mouseover

let flow = document.querySelector('a:nth-of-type(8)')

flow.addEventListener('mouseover', function () {
  flow.classList.toggle('flow-rotate')
})


//  Element 3 dblclick & keydown

let feedforward = document.querySelector('a:nth-of-type(16)')

feedforward.addEventListener('dblclick', function (){
  feedforward.hidden = true
})
document.addEventListener('keydown', function(event) {
  console.log(event)
  
  if (event.key == "x") {
    feedforward.hidden = false  
  }})

// Element 4 keydown

let development = document.querySelector('a:nth-of-type(4)')

document.addEventListener('keydown', function(event) {
  console.log(event)
  if (event.key =="h") {
    development.classList.add('development-key')
  }
  if (event.key == "x") {
    development.classList.remove('development-key')
  }
})

// Element 5 click

let userFlow = document.querySelector('a:nth-of-type(13)')

userFlow.addEventListener('click', function() {

  userFlow.classList.toggle('userFlow-colour')
  })


// Element 6 click

let code = document.querySelector('a:nth-of-type(20)')

code.addEventListener('click', function() {

  code.classList.toggle('code-click')
})


//  Element 7 mouseup

let states = document.querySelector('a:nth-of-type(18)')

states.addEventListener('mouseup', function() {
  
  states.classList.toggle('states-size')
})


//  Element 8

let feedback = document.querySelector('a:nth-of-type(15)')

feedback.addEventListener('dblclick', function(){

  feedback.classList.toggle('feedback-fade-in')
})

// Element 9

let user = document.querySelector('a:nth-of-type(9)')

user.addEventListener('mouseover', function(){

  user.classList.toggle('user-dissapear')
})