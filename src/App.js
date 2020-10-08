import { Router } from '@reach/router';
import React from 'react';
import './App.css';
import DeleteWithId from './components/DeleteWithId';
import FormWrapper from './components/FormWrapper';
import ShowWithId from './components/ShowWithId';
import UpdateForm from './components/UpdateForm';


function App() {
  return (
    <div className="App">
      <Router>
        <FormWrapper path="/"/>
        <ShowWithId path="/:id" />
        <UpdateForm path="/:id/edit"/>
        <DeleteWithId path="/:id/delete"/>
      </Router>
    </div>
  );
}

export default App;
