import React, {useState} from 'react';
import Counter from './counter';

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
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
