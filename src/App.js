import React from 'react'
import addEffectOnScroll from './addEffectOnScroll'
export default class App extends React.Component {
  
  constructor() {
    super()
    this.state = {}
  }

  render() {
    window.addEventListener('scroll', () => addEffectOnScroll('fade-out', 'line'))
    window.addEventListener('scroll', () => addEffectOnScroll('header-container-minimized', 'header-container-start'))
    window.addEventListener('scroll', () => addEffectOnScroll('fade-in', 'info-container'))
    window.addEventListener('scroll', () => addEffectOnScroll('fade-in', 'info-card'))
    return (
      // ~Structure~
      // Name
      // Subtitle/Mission
      // Qualifications
      // Projects
      // Contact
      <>
        <div id="container">

          <div className="header-container-start">
            <div id="name-container">
              <h1 id="name-text">opallo</h1>
            </div>
            <div id="subtitle-container">
              <h2 id="subtitle-text"><span id="web-span">web</span>development</h2>
            </div>
            <div id="line" className="line"></div>
          </div>



          {/* <div className="info-container">
            <div className="info-card">
              <div className="info-text">
                World-class web development services.
              </div>
            </div>
            <div className="info-card">
              <div className="info-text">
                Robust functionality delivered with beautuful design.
              </div>
            </div>
            <div className="info-card">
              <div className="info-text">
                Just wow.
              </div>
            </div>
          </div> */}
        </div>
      </>
    )


  }
}