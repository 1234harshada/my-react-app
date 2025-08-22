/*
Part A – Theory Answers

Controlled vs Uncontrolled Components
- Controlled components have their input values managed by React state (example: a text input).
- Uncontrolled components rely on the DOM to handle their input values (example: a file input).

React Context vs Redux
- Context is used for sharing small or simple state like theme or language.
- Redux is used for managing large-scale global state in big applications.

Importance of Key Prop in Lists
- The key helps React identify each list item uniquely.
- Without keys, unnecessary re-renders can happen and bugs may appear.

Rules of React Hooks
- Hooks should only be called at the top level of function components or custom hooks.
- Example of wrong usage: using useState inside a condition like if(something){ useState(0); }

useMemo vs useCallback
- useMemo memoizes a value or calculation result to avoid expensive recomputation.
- useCallback memoizes a function to avoid unnecessary re-creations on re-renders.
*/

import React, { useState, useEffect } from "react";

// Countdown Timer
function TimerCountdown() {
  const [number, setNumber] = useState(10);

  useEffect(() => {
    if (number > 0) {
      const t = setTimeout(() => setNumber(number - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [number]);

  return <h2>Timer: {number}</h2>;
}

// Todo List
function MyTodos() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, { name: taskInput, done: false }]);
      setTaskInput("");
    }
  };

  const toggleDone = (index) => {
    const copy = [...tasks];
    copy[index].done = !copy[index].done;
    setTasks(copy);
  };

  return (
    <div>
      <h3>My Todo List</h3>
      <input
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((t, i) => (
          <li
            key={i}
            onClick={() => toggleDone(i)}
            style={{
              textDecoration: t.done ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {t.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Product List
function ItemsList() {
  const itemList = [
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Phone", price: 30000 },
    { id: 3, name: "Headphones", price: 2000 },
  ];

  const [list, setList] = useState(itemList);

  const sortPrice = () => setList([...list].sort((a, b) => a.price - b.price));

  return (
    <div>
      <h3>Products</h3>
      <button onClick={sortPrice}>Sort Price Low to High</button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Custom Hook for Window Width
function useScreenWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

// Display Window Width
function ShowWidth() {
  const width = useScreenWidth();
  return <h3>Window width: {width}px</h3>;
}

// Reverse Text Input
function ReverseInput() {
  const [text, setText] = useState("");
  return (
    <div>
      <h2>Reverse Text</h2>
      <input
        placeholder="Type here..."
        onChange={(e) => setText(e.target.value)}
      />
      <p>Reversed: {text.split("").reverse().join("")}</p>
    </div>
  );
}

// Main App
function TestApp() {
  return (
    <div style={{ padding: "20px", fontFamily: "Verdana" }}>
      <ReverseInput />
      <hr />
      <TimerCountdown />
      <hr />
      <MyTodos />
      <hr />
      <ItemsList />
      <hr />
      <ShowWidth />
    </div>
  );
}

export default TestApp;