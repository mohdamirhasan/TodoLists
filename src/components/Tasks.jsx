import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MdDelete, MdEdit, MdAddToPhotos } from 'react-icons/md';
import { VscClearAll } from "react-icons/vsc";

function Tasks() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [showCompleted, setshowCompleted] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const Clear = () => {
    setTodos([])
  }

  const Completed = () => {
    setshowCompleted(!showCompleted);
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && todo.trim().length >= 3) {
      handleAdd();
    }
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
  };

  const handleEdit = (id) => {
    const taskToEdit = todos.find(item => item.id === id);
    if (taskToEdit) {
      setTodo(taskToEdit.todo);
      const newTodos = todos.filter(item => item.id !== id);
      setTodos(newTodos);
    }
  };

  const handleCheck = (e) => {
    const id = e.target.name;
    let index = todos.findIndex(item => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <div className="w-full flex justify-center items-center font-['Proxima Nova'] p-4 md:py-10">
      <div className="taskbox w-full max-w-md min-h-[80vh] max-h-md bg-blue-50 rounded-lg px-4 py-6 md:p-8 flex flex-col gap-4 shadow-lg">
        <h2 className="text-center text-xl md:text-2xl font-bold">myTask - Manage your Tasks</h2>

        <div className="add flex flex-col gap-3">
          <h3 className="text-base md:text-lg font-semibold">Add Task</h3>
          <div className="input flex gap-2">
            <input
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              value={todo}
              type="text"
              className="flex-1 rounded-full focus:outline-none px-3 py-2 text-sm w-3/4"
              placeholder="Enter your task"
              autoFocus
            />
            <button
              onClick={handleAdd}
              disabled={todo.length < 3}
              className="bg-blue-900 px-3 py-2 text-white rounded-full text-sm hover:bg-blue-950"
            >
              <MdAddToPhotos/>
            </button>
            <button 
              onClick={Clear}
              className="bg-blue-900 px-3 py-2 text-white rounded-full text-sm hover:bg-blue-950"
            >
              <VscClearAll/>
            </button>
          </div>
        </div>

        <div className="show-completed flex items-center gap-2 text-sm">
          <input
            onChange={Completed}
            type="checkbox"
            checked={showCompleted}
            name=""
            id=""
          />
          <label>Show Completed</label>
        </div>

        <h3 className="text-base md:text-lg font-semibold">Your Tasks</h3>
        <div className="tasks flex flex-col gap-2">
          {todos.length === 0 && (
            <div className="m-5 w-full text-gray-600 flex">No Tasks to display</div>
          )}
          {todos.map((item) => (
            (!item.isCompleted || showCompleted) && (
              <div key={item.id} className="task flex justify-between items-center rounded-lg shadow-sm">
                <div className="flex gap-3 items-center w-3/4">
                  <input onChange={handleCheck} type="checkbox" checked={item.isCompleted} name={item.id} />
                  <span className={`${item.isCompleted ? "line-through" : ""} text-sm`}>{item.todo}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="bg-blue-700 px-3 py-1 rounded-lg text-white text-xs hover:bg-blue-800"
                  >
                    <MdEdit/>
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 px-3 py-1 rounded-lg text-white text-xs hover:bg-red-600"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tasks;
