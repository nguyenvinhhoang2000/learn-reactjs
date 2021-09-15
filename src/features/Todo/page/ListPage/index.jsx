import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import TodoList from '../../components/TodoList';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
    {
      id: 4,
      title: 'Play Game',
      status: 'new',
    },
    {
      id: 5,
      title: 'Learn ReactJS',
      status: 'new',
    },
    {
      id: 6,
      title: 'Learn NodeJs',
      status: 'new',
    },
  ];

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilterStatus(params.status || 'all');
  }, [location.search]);

  const handleAllClick = () => {
    // setFilterStatus("all");
    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleNewClick = () => {
    // setFilterStatus("new");
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleCompletedClick = () => {
    // setFilterStatus("completed");
    const queryParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const renderFilterStatus = todoList.filter(
    (todo) => filterStatus === 'all' || filterStatus === todo.status
  );

  const handleTodoClick = (todo, index) => {
    const newTodoList = [...todoList];

    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'new' ? 'completed' : 'new',
    };

    setTodoList(newTodoList);
  };

  const handleTodoFormSubmit = (values) => {
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new',
    };

    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h3>What todo?</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <h1>TodoList</h1>
      <TodoList todoList={renderFilterStatus} onTodoClick={handleTodoClick} />
      <button onClick={handleAllClick}>show all</button>
      <button onClick={handleNewClick}>show new</button>
      <button onClick={handleCompletedClick}>show completed</button>
    </div>
  );
}

export default ListPage;
