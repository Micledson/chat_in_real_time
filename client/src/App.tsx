import React, { useEffect } from 'react';
import io from 'socket.io-client';

function App() {
  useEffect(() => {
    io("http://localhost:3030");
  }, []);

  return (
    <h1>ola</h1>
  );
}

export default App;
