import './App.css'
import './css/app.min.css'
import Counter from './components/Counter/Counter'
import Button from './components/Counter/Button'
import ArrayData from './components/People/PeopleData'
import ArrayButton from './components/utils/ARRAY_DATA'
import RenderQuiz from './components/Quiz/RenderQuiz'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div className='style__section '>
        <Counter count={count} />
        {ArrayButton.map((text, index) => {
          return <Button key={index} count={count} onClick={setCount} text={text} />
        })}
      </div>
      <div className='style__section style__section-scroll '>
        <ArrayData />
      </div>
      <div className='style__section style__section-scroll'>
        <RenderQuiz />
      </div>
    </div>
  );
}

export default App;
