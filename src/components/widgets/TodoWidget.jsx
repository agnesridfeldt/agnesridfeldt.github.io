import React, { useRef, useState } from "react";
import "./TodoWidget.css";

let nextId = 2;

export default function TodoWidget() {
  const [items, setItems] = useState([
    { id: 1, text: "Move pics to “Summer 07”", completed: false },
    { id: 2, text: "Clear out closet", completed: false },
    { id: 3, text: "Enroll in classes", completed: false },
    { id: 4, text: "Backup “Nattie” folder to USB", completed: false },
    { id: 5, text: "Check 8/13", completed: false },   
  ]);

  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  function toggleItem(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function addItem() {
    const trimmed = input.trim();
    if (!trimmed) return;

    setItems((prev) => [
      ...prev,
      { id: nextId++, text: trimmed, completed: false },
    ]);
    setInput("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    addItem();
  }

  function handlePlusClick(e) {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div className="todo-widget">
      <h2 className="todo-title">To Do</h2>

      <ul className="todo-list">
        {items.map((item) => (
          <li
            key={item.id}
            className={
              "todo-item" + (item.completed ? " todo-item--completed" : "")
            }
          >
            <button
              type="button"
              className={
                "todo-checkbox" +
                (item.completed ? " todo-checkbox--checked" : "")
              }
              onClick={() => toggleItem(item.id)}
              aria-pressed={item.completed}
            >
              {item.completed && <span className="todo-checkmark">✓</span>}
            </button>
            <span className="todo-text">{item.text}</span>
          </li>
        ))}
      </ul>

      <form className="todo-input-row" onSubmit={handleSubmit}>
        <button
          type="button"
          className="todo-add-btn"
          onClick={handlePlusClick}
        >
          +
        </button>
        <input
          ref={inputRef}
          type="text"
          className="todo-inline-input"
          placeholder="Write and press Enter…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
}