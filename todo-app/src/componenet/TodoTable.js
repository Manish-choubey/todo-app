import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Table, InputGroup, FormControl, Pagination } from 'react-bootstrap';

const TodoTable = () => {
  const todos = useSelector(state => state.todos);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 5;

  // Filter todos based on search term
  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current todos
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);

  // Calculate total pages
  const totalPages = Math.ceil(filteredTodos.length / todosPerPage);

  // Handle search term change
  const handleSearchTermChange = event => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  // Handle page change
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="todo-table">
      <InputGroup className="mb-3">
        <FormControl
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
          placeholder="Search TODOs"
          className="rounded"
        />
      </InputGroup>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {currentTodos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.completed ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {filteredTodos.length > todosPerPage && (
        <Pagination className="justify-content-center">
          <Pagination.Prev
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          />
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            pageNumber => (
              <Pagination.Item
                key={pageNumber}
                active={pageNumber === currentPage}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </Pagination.Item>
            )
          )}
          <Pagination.Next
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </Pagination>
      )}
    </div>
  );
};

export default TodoTable;
