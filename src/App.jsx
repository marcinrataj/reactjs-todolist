import { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
	// stores a list of tasks
	const [todos, setTodos] = useState([]);
	//stores the entered value
	const [todoValue, setTodoValue] = useState('');

	function persistData(newList){
		localStorage.setItem('todos', JSON.stringify({ todos: newList }))
	}

	// add element to list
	function handleAddTodos(newTodo){
		const newTodoList = [...todos, newTodo];
		persistData(newTodoList)
		setTodos(newTodoList)
	}

	// delete element from list
	function handleDeleteTodo(index){
		const newTodoList = todos.filter((todo, todoIndex) => {
			return todoIndex !== index
		})
		persistData(newTodoList)
		setTodos(newTodoList)
	}

	// edit element list
	function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

	// read informations and make changes in first render
	useEffect(()=>{
		if(!localStorage){
			return
		}

		let localTodos = localStorage.getItem('todos')
		if(!localTodos){
			return
		}
		// change string to obj
		localTodos = JSON.parse(localTodos).todos
		// change list of task on this from localstorage
		setTodos(localTodos)
	},[])

	return (
		<>
			<TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
			<TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
		</>
	);
}

export default App;

//32:32 https://www.youtube.com/watch?v=82PXenL4MGg&t=351s