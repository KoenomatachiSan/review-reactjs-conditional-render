import React from 'react';
import Component from './Component';


function App() {
  return (
    <div className="App">
        <p>
         Hello World!
         My name is KoenomatachiSan, and it's my component!
        </p>
        <Component title="Minha tabela, titulo via props"/>
    </div>
  );
}

// Props are read-only

export default App;
