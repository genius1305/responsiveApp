import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import profile from  './assets/ginus.gif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<main>
<div class="header">Genius responsive app</div>
      <div class="hero">
        <h2>Hey, am Genius Makokezi</h2>
        <p>
          I have just build the responsive web app using Grid Css layout and
          html
          <br />and sharing the local server in public for your review
        </p>
        <a href="https://github.com/genius1305"> Github Account </a>
      </div>
      <div class="card">
        <div class="img">
          <img src={profile} />
        </div>
        <div class="info">
          <h1>About</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            illum rerum quos incidunt maxime cupiditate est molestias numquam in
            odit?
          </p>
          <ul>
            <li>1. Html</li>
            <li>2. Css</li>
            <li>3. Javascript</li>
          </ul>

          <p class="card-footer">Genius 2025</p>
        </div>
      </div>
    </main>


    </>
  )
}

export default App
