import {useState, useEffect} from "react"
import Group from './assets/Group.png'
import Group3 from './assets/Group3.png'
import './App.css'

function App() {
  const [text, setText] = useState([])

  const fetchAdvice = async() => {
    const res = await fetch("https://api.adviceslip.com/advice")
    
    const data = await res.json()

    console.log(data)

    setText(data.slip)
  }

  useEffect(() => {
    fetchAdvice()
  }, [])


  return (
    <div className='app-background'>
      <div className='advice-background'>
        <div className='advice-title'>
          <h3>ADVICE #{text.id}</h3>
        </div>
        <div className='advice-text'>
          <p className='text'>
            {text.advice}
          </p>
        </div>
        <div className='group-holder'>
          <div className='empty'></div>
          <div className='stoke'>
            <img src={Group} />
          </div>
          <div className='empty'></div>
        </div>
      </div>
      <div className='group3-icon'>
          <img onClick={fetchAdvice} className='img' src={Group3} />
      </div>
    </div>
  )
}

export default App
