import React, { useState } from 'react';
import './App.css';

type Todo = {
  value: string;
  readonly id: number;
  checked: boolean;
};

const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // フォーム送信時のデフォルト動作を防ぐ
    if (!text) return;

    const newTodo: Todo = {
      value: text,
      id: new Date().getTime(),
      checked: false,
    };

    setTodos((todos) => [newTodo, ...todos]);
    setText('');
  };

  const handleEdit = (id: number, value: string) => {
    setTodos((todos) => {
      return todos.map((todo) => 
        todo.id === id ? { ...todo, value } : todo 
      );
    });
  };

  const handleToggle = (id: number) => {
    setTodos((todos) => {
      return todos.map((todo) => 
        todo.id === id ? { ...todo, checked: !todo.checked } : todo 
      );
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="新しいTodoを追加"
        />
        <input type="submit" value="追加" />
      </form>

      {/* Todoリストの表示 */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => handleToggle(todo.id)}
            />
            <input
              type="text"
              value={todo.value}
              onChange={(e) => handleEdit(todo.id, e.target.value)}
            />
          </li>
        ))}
      </ul>

      <p>{text}</p>
      
    </div>
  );
};

export default App;
