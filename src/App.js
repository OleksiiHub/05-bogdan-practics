
import { useState } from 'react';
import './App.css';
import './css/app.min.css'
import Counter from './components/Counter'
import Button from './components/Button'
import ArrayData from './components/Array';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div className='style__section'>
        <Counter count={count} />
        <Button count={count} onClick={setCount} />
        <Button count={count} onClick={setCount} />
        <Button count={count} onClick={setCount} />
        <Button count={count} onClick={setCount} />
      </div>
      <div className='style__section style__section-scroll'>
        <ArrayData />
      </div>

    </div>
  );
}

export default App;
