<template>
	<TodoHeader />
	<TodoInput @add="handleAddTodoItem" />
	<TodoList :todoList="todoList" @toggle="handleToggleTodoItem" @delete="handleDeleteTodoItem" />
	<TodoFooter />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { v4 as uuid } from 'uuid';

import type { Todo } from './@types';
import { TodoFooter, TodoHeader, TodoInput, TodoList } from './components';
import { getTodosFromStorage, setTodosToStorage } from './utils';

const todoList = ref<Todo[]>([]);

const fetchTodoList = () => {
	todoList.value = getTodosFromStorage().sort((a, b) => a.content.localeCompare(b.content));
};

const handleAddTodoItem = (content: string) => {
	const newTodo: Todo = {
		id: uuid(),
		content,
		done: false
	};

	todoList.value.push(newTodo);
	setTodosToStorage(todoList.value);
};

const handleToggleTodoItem = (todoItem: Todo, index: number) => {
	todoList.value.splice(index, 1, { ...todoItem, done: !todoItem.done });
	setTodosToStorage(todoList.value);
};

const handleDeleteTodoItem = (index: number) => {
	todoList.value.splice(index, 1);
	setTodosToStorage(todoList.value);
};

fetchTodoList();
</script>

<style lang="scss" scoped></style>
