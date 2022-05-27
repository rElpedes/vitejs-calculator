import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('');

  const calculate = () => {
    setDisplay(eval(display));
  }

  const backSpace = () => {
    setDisplay(display.slice(0, -1))
  }

  return (
    <div className="App">
      <section>
      <div className="container">
        <div id="display">{display}</div>
        <div className="buttons">
          <div className="button" onClick={() => setDisplay('')} >C</div>
          <div className="button" onClick={() => setDisplay(display + '/')} >/</div>
          <div className="button" onClick={() => setDisplay(display + '*')} >*</div>
          <div className="button" onClick={() => backSpace()} >&larr;</div>
          <div className="button" onClick={() => setDisplay(display + '7')} >7</div>
          <div className="button" onClick={() => setDisplay(display + '8')} >8</div>
          <div className="button" onClick={() => setDisplay(display + '9')} >9</div>
          <div className="button" onClick={() => setDisplay(display + '-')} >-</div>
          <div className="button" onClick={() => setDisplay(display + '4')} >4</div>
          <div className="button" onClick={() => setDisplay(display + '5')} >5</div>
          <div className="button" onClick={() => setDisplay(display + '6')} >6</div>
          <div className="button" onClick={() => setDisplay(display + '+')} >+</div>
          <div className="button" onClick={() => setDisplay(display + '1')} >1</div>
          <div className="button" onClick={() => setDisplay(display + '2')} >2</div>
          <div className="button" onClick={() => setDisplay(display + '3')} >3</div>
          <div className="button" onClick={() => setDisplay(display + '.')} >.</div>
          <div className="button" onClick={() => setDisplay(display + '(')} >(</div>
          <div className="button" onClick={() => setDisplay(display + '0')} >0</div>
          <div className="button" onClick={() => setDisplay(display + ')')} >)</div>
          <div id="equal" className="button" onClick={() => calculate()}>=</div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default App
