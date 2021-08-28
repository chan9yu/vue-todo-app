import { TodoItem } from './interface'

const STORAGE_KEY = 'todo-items'

function save(todoItems: TodoItem[]) {
	const parsed = JSON.stringify(todoItems)
	localStorage.setItem(STORAGE_KEY, parsed)
}

function fetch(): TodoItem[] {
	const todoItems = localStorage.getItem(STORAGE_KEY) || '[]'
	const res = JSON.parse(todoItems)
	return res
}

function clear() {
	localStorage.clear()
}

export { save, fetch, clear }
