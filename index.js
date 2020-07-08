var exit = document.getElementById('exit')
var nav = document.getElementById('nav')
var menu = document.getElementById('menu')

menu.addEventListener('click', function(e){
  nav.classList.toggle('hide-mobile')
})

exit.addEventListener('click', function(e){
  nav.classList.toggle('hide-mobile')
})