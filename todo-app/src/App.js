import React from 'react';
import TodoForm from '../src/componenet/TodoForm';
import TodoList from '../src/componenet/TodoList';
import TodoTable from '../src/componenet/TodoTable';

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center my-4">TODO App</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-header">Add TODO</div>
            <div className="card-body">
              <TodoForm />
            </div>
          </div>
          <div className="card">
            <div className="card-header">TODO List</div>
            <div className="card-body">
              <TodoList />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">TODO Table</div>
            <div className="card-body">
              <TodoTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
