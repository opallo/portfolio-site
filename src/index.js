import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import addEffect from './addEffect.js'
import './style.css'

ReactDOM.render(<App />, document.getElementById('root'))

window.addEventListener('scroll', () => addEffect('fade-out', 'line'))
window.addEventListener('scroll', () => addEffect('header-container-minimized', 'header-container-start'))
window.addEventListener('scroll', () => addEffect('fade-in', 'info-container'))
window.addEventListener('scroll', () => addEffect('fade-in', 'info-card'))


