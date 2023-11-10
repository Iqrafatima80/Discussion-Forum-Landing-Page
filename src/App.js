
import React from 'react';
import './App.css';

import Header from './Components/Header';
import QuestionList from './Components/QuestionList';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <QuestionList />
      </main>
    </div>
  );
}

export default App;
