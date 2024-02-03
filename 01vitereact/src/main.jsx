import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// const reactElement = {
//   type : 'a',
//   props : {
//       href : 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = " Aman Sinha" // Injecting Variables outside of the jsx

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherUser // Evaluated expression has been injected.
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // anotherElement
  reactElement
  // <App />
)