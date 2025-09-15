// src/UseEffectTest.jsx
import React, { useState, useEffect } from 'react';

const UseEffectTest = () => {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [count, setCount] = useState(0);

  // No dependency array 
  useEffect(() => {
    console.log('Effect (no dependency array) — runs after every render');
  });

  // Empty dependency array 
  useEffect(() => {
    console.log('Effect (empty dependency array) — runs once after first render');
  }, []);

  // Dependency array
  useEffect(() => {
    console.log('Effect listening to toggleTwo — ran');
    if (toggleTwo) {
      console.log('toggleTwo slice of state is true so this code runs');
    }
  }, [toggleTwo]);

  // Effect with interval and cleanup 
  useEffect(() => {
    const myInterval = setInterval(() => {
      console.log(`UseEffect3 with interval number ${count} is running`);
    }, 1000);

    return () => {
      console.log(
        `UseEffect3 cleanup ran.\nsetInterval number ${count} is being cleared out`
      );
      clearInterval(myInterval);
    };
  }, [count]);

  return (
    <div style={{ padding: 20 }}>
      {console.log('rendered or re-rendered')}
      <h1>UseEffectTest Component</h1>

      <div style={{ margin: '8px 0' }}>
        <button onClick={() => setToggleOne(!toggleOne)}>
          ToggleOne (current: {String(toggleOne)})
        </button>
      </div>

      <div style={{ margin: '8px 0' }}>
        <button onClick={() => setToggleTwo(!toggleTwo)}>
          ToggleTwo (current: {String(toggleTwo)})
        </button>
      </div>

      <div style={{ margin: '8px 0' }}>
        <button onClick={() => setCount(prev => prev + 1)}>
          Count (current: {count})
        </button>
      </div>
    </div>
  );
};

export default UseEffectTest;
