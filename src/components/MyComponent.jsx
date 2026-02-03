import React, { useState } from 'react';

function MyComponent({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <h2>Hello, {name}!</h2>
      <p>You clicked the button {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;