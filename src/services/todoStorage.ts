import type { Todo } from '../@types';

export const STORAGE_KEY = 'vue-todo-app';

class TodoStorage {
	private static instance: TodoStorage;

	private constructor() {}

	static getInstance(): TodoStorage {
		if (!TodoStorage.instance) {
			TodoStorage.instance = new TodoStorage();
		}
		return TodoStorage.instance;
	}

	getTodos(): Todo[] {
		const storedItems = localStorage.getItem(STORAGE_KEY) || '[]';
		return JSON.parse(storedItems) as Todo[];
	}

	saveTodos(todoItems: Todo[]) {
		const serializedItems = JSON.stringify(todoItems);
		localStorage.setItem(STORAGE_KEY, serializedItems);
	}
}

export const todoStorage = TodoStorage.getInstance();
