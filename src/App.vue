<template>
	<TodoHeader />
	<TodoInput @add="handleAddTodoItem" />
	<TodoList :todoList="todoList" />
	<TodoFooter />
</template>

<script lang="ts">
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
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			todoList: [] as any[]
		};
	},

	methods: {
		getTodoItems() {
			return todoStorage.getTodos();
		},

		handleAddTodoItem(item: string) {
			console.log('### item', item);
			this.todoList.push(item);
			todoStorage.saveTodo(this.todoList);
		}
	},

	created() {
		this.todoList = this.getTodoItems();
		console.log(this.todoList);
	}
};
</script>

<style lang="scss"></style>
