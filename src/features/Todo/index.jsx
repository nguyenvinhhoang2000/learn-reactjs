import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
    {
      id: 4,
      title: "Play Game",
      status: "new",
    },
    {
      id: 5,
      title: "Learn ReactJS",
      status: "new",
    },
    {
      id: 6,
      title: "Learn NodeJs",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState('all');

  const handleAllClick = () => {
    setFilterStatus('all')
  }
  const handleNewClick = () => {
    setFilterStatus('new')
  }
  const handleCompletedClick = () => {
    setFilterStatus('completed')
  }
  const renderFilterStatus = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status)

  const handleTodoClick = (todo, index) => {
    const newTodoList = [...todoList];

    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };

    setTodoList(newTodoList);
  };

  return (
    <div>
      <h1>TodoList</h1>

      <TodoList todoList={renderFilterStatus} onTodoClick={handleTodoClick} />
      <button onClick={handleAllClick}>show all</button>
      <button onClick={handleNewClick}>show new</button>
      <button onClick={handleCompletedClick}>show completed</button>
    </div>
  );
}

export default TodoFeature;
