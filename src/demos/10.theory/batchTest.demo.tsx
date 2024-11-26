import { useState, useEffect } from "react";

function TestBatchUpdate() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);


  const asyncHandleClick = () => {
    console.group('async');
    setCount(count + 1);
    requestIdleCallback(() => {
      setCount2(count2 + 1);
      setTimeout(() => {
        console.groupEnd();
      }, 0);
    })
  };
  const syncHandleClick = () => {
    console.group('sync');

    setCount(count + 1);
    setCount2(count2 + 1);
    setTimeout(() => {
      console.groupEnd();
    }, 0);
  };

  useEffect(() => {
    console.log('count after', count, count2);
}, [count, count2]);

  return (
    <div>
      <button onClick={asyncHandleClick}>async not batch, effect will log twice</button>
      <button onClick={syncHandleClick}>sync will  batch update, effect will log one</button>
      <p>Count: {count}</p>
      <p>Count2: {count2}</p>
    </div>
  );
}

TestBatchUpdate.meta = {
  tags: [ 'theory', 'batchUpdate']
}

export default TestBatchUpdate;