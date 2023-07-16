<template>
	<TodoHeader />
	<TodoInput @add="handleAddTodoItem" />
	<TodoList :todoList="todoList" @toggle="handleToggleTodoItem" @delete="handleDeleteTodoItem" />
	<TodoFooter />
</template>

<script lang="ts">
import type { Todo } from './@types';
import { TodoFooter, TodoHeader, TodoInput, TodoList } from './components';
import { todoStorage } from './utils';

export default {
	components: {
		TodoFooter,
		TodoHeader,
		TodoInput,
		TodoList
	},

	data() {
		return {
			todoList: [] as Todo[]
		};
	},

	methods: {
		getTodoItems() {
			return todoStorage.getTodos();
		},

		handleAddTodoItem(item: string) {
			this.todoList.push({
				done: false,
				title: item
			});
			todoStorage.saveTodo(this.todoList);
		},

		handleToggleTodoItem(todoItem: Todo, index: number) {
			this.todoList.splice(index, 1, {
				...todoItem,
				done: !todoItem.done
			});
			todoStorage.saveTodo(this.todoList);
		},

		handleDeleteTodoItem(index: number) {
			this.todoList.splice(index, 1);
			todoStorage.saveTodo(this.todoList);
		}
	},

	created() {
		this.todoList = this.getTodoItems();
	}
};
</script>

<style lang="scss"></style>
