import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
	const [todos, setTodos] = useState([]);

	function handleAddTodos(newTodo){
		const newTodoList = [...todos, newTodo];
		setTodos(newTodoList)
	}

	function handleDeleteTodo(index){
		const newTodoList = todos.filter((todo, todoIndex) => {
			return todoIndex !== index
		})
	}
	function handleEditTodo(index){

	}

	return (
		<>
			<TodoInput handleAddTodos={handleAddTodos} />
			<TodoList todos={todos} />
		</>
	);
}

export default App;

//32:32 https://www.youtube.com/watch?v=82PXenL4MGg&t=351s