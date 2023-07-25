import { useState } from 'react';
import './App.css';
import './css/app.min.css'
import Counter from './components/Counter'
import Button from './components/Button'
import ArrayData from './components/Array';
import arrayButton from './components/utils/ArrayButton';
import RenderQuiz from './components/RenderQuiz'


function App({ key }) {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div className='style__section '>
        <Counter count={count} />
        {arrayButton.map((text, index) => {
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
