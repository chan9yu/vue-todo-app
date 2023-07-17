<template>
	<main>
		<ul>
			<TodoItem v-for="todoItem in todoList" :key="todoItem.id" :todoItem="todoItem" />
		</ul>
	</main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useTodoStore } from '../store';
import { getTodosFromStorage } from '../utils';
import TodoItem from './TodoItem.vue';

const todoStore = useTodoStore();
const { todoList } = storeToRefs(todoStore);

const fetchTodoList = () => {
	todoList.value = getTodosFromStorage();
};

fetchTodoList();
</script>

<style lang="scss" scoped></style>
