import type { Todo } from '../@types';

export const STORAGE_KEY = 'vue-todo-app' as const;

export const todoStorage = {
	getTodos(): Todo[] {
		const todoItems = localStorage.getItem(STORAGE_KEY) || '[]';
		const result = JSON.parse(todoItems);

		return result;
	},

	saveTodo(item: Todo[]) {
		const parsedItem = JSON.stringify(item);
		localStorage.setItem(STORAGE_KEY, parsedItem);
	}
};
