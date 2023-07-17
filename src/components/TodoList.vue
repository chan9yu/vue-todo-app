<template>
	<main class="todo-list">
		<TodoInfo />
		<ul class="todo-list__wrapper">
			<TodoItem v-for="todoItem in todoList" :key="todoItem.id" :todoItem="todoItem" />
		</ul>
	</main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useTodoStore } from '../store';
import { getTodosFromStorage } from '../utils';
import { TodoInfo, TodoItem } from '.';

const todoStore = useTodoStore();
const { todoList } = storeToRefs(todoStore);

const fetchTodoList = () => {
	todoList.value = getTodosFromStorage();
};

fetchTodoList();
</script>

<style lang="scss" scoped>
.todo-list {
	width: 80%;
	max-width: $content-width;
	margin-top: calc($form-height / 2);
	display: flex;
	flex-direction: column;
	gap: 24px;

	&__wrapper {
		width: inherit;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
}
</style>
