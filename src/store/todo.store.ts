import { defineStore } from 'pinia';
import { v4 as uuid } from 'uuid';

import type { Todo } from '../@types';

export const useTodoStore = defineStore('todo', {
	state: () => ({
		todoList: [] as Todo[],
		editMode: ''
	}),
	getters: {
		countTodo: state => state.todoList.length
	},
	actions: {
		addTodo(content: string) {
			if (!content) return alert('빈 값 입니다!');
			const newTodo: Todo = {
				id: uuid(),
				content,
				done: false
			};
			this.todoList = [...this.todoList, newTodo];
		},

		editTodo(editTodo: Todo) {
			const setData = this.todoList.map(todo => {
				if (todo.id === editTodo.id) todo = editTodo;
				return todo;
			});
			this.todoList = setData;
		},

		removeTodo(id: string) {
			const setData = this.todoList.filter(todo => todo.id !== id);
			this.todoList = setData;
		},

		checkTodo(id: string) {
			const setData = this.todoList.map(todo => {
				if (todo.id === id) todo.done = !todo.done;
				return todo;
			});
			this.todoList = setData;
		},

		changeTodoEditMode(id: string) {
			this.editMode = id;
		},

		closeTodoEditMode() {
			this.editMode = '';
		}
	}
});
