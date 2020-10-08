import { Router } from '@reach/router';
import React from 'react';
import './App.css';
import FormWrapper from './components/FormWrapper';
import ShowWithId from './components/ShowWithId';


function App() {
  return (
    <div className="App">
      <Router>
        <FormWrapper path="/"/>
        <ShowWithId path="/:id" />
      </Router>
    </div>
  );
}

export default App;
