<template>
	<div>
		<label for="todo-input">Todo: </label>
		<input id="todo-input" type="text" v-model="todoValue" />
		<button @click="handleAddTodo" type="button">ADD</button>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref, unref } from 'vue';

import { useTodoStore } from '../store';
import { setTodosToStorage } from '../utils';

const todoValue = ref('');

const todoStore = useTodoStore();
const { addTodo } = todoStore;
const { todoList } = storeToRefs(todoStore);

const clearTodoInput = () => {
	todoValue.value = '';
};

const handleAddTodo = () => {
	addTodo(unref(todoValue));
	setTodosToStorage(unref(todoList));
	clearTodoInput();
};
</script>

<style lang="scss" scoped></style>
