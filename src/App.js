import React from 'react';
import Quote from './Components/quote';
import Category from './Components/category';
import GetQuote from './Components/getquote';
import './App.css';

const theQuote = 'Chuck Norris can walk on Wfter';

function App() {
  return (
    <div className="App">
      <h1>Chuck Norris</h1>
      <Quote quote={theQuote} />
      <Category />
      <GetQuote />
    </div>
  );
}

export default App;
