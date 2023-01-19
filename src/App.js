import React, {useState} from 'react';
import Counter from './counter';

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(prevCount => prevCount - 1)
    colorChange()
  }

  function decrement() {
    setCount(prevCount => prevCount + 1)
    colorChange()
  }

  function colorChange() {
    document.body.style.color = 'blue'
  }

  return (
    <>
    <Counter count={count}/>
    <button onClick={ increment }>Increase</button>
    <button onClick={ decrement }>Decrease</button>
    </>
  );
}

export default App;
