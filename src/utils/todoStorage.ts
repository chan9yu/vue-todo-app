/* eslint-disable */
export const STORAGE_KEY = 'vue-todo-app' as const;

export const todoStorage = {
	getTodos(): any[] {
		const todoItems = localStorage.getItem(STORAGE_KEY) || '[]';
		const result = JSON.parse(todoItems);

		return result;
	},

	saveTodo(item: any[]) {
		const parsedItem = JSON.stringify(item);
		localStorage.setItem(STORAGE_KEY, parsedItem);
	}
};
