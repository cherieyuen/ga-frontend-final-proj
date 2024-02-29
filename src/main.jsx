import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

var elements = document.getElementsByClassName('restaurantTile')

var myFunction = function () {
  var attribute = this.getAttribute('data-myattribute')
  alert(attribute)
}

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', myFunction, false)
}
