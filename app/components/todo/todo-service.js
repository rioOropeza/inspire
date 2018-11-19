

const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/rio/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let todoList = []

export default class TodoService {

	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => { // <-- WHY IS THIS IMPORTANT????
				todoList = res.data.data
				draw(todoList)
			})
			.catch(logError)
	}

	addTodo(todo, callback) {
		// WHAT IS THIS FOR???
		todoApi.post('', todo)
			.then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				callback()
			})
			.catch(logError)
	}

	toggleTodoStatus(todoId, getTodos) {
		console.log(todoId)
		// MAKE SURE WE THINK THIS ONE THROUGH

		// todoList.findIndex(id =>)

		var todo = todoList.find(t => t._id === todoId)
		todo.completed = !todo.completed
		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(function (res) {
				getTodos()
			})
			.catch(logError)
	}

	removeTodo(id, callback) {
		todoApi.delete(id)
			.then(function (res) {
				callback()
			})
			.catch(logError)
	}
	get todoList() {
		return todoList
	}
}















//@ts-ignore
// t => t._id === todoId

// function myFind(todoId) {
// 	for (let i = 0; i < todoList.length; i++) {
// 		let t = todoList[i]
// 		if (t._id == todoId) return t
// 	}
// }