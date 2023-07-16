<template>
	<TodoHeader />
	<TodoInput @add="handleAddTodoItem" />
	<TodoList :todoList="todoList" @toggle="handleToggleTodoItem" @delete="handleDeleteTodoItem" />
	<TodoFooter />
</template>

<script setup lang="ts">
import { ref } from 'vue';

import type { Todo } from './@types';
import { TodoFooter, TodoHeader, TodoInput, TodoList } from './components';
import { todoStorage } from './services';

const todoList = ref<Todo[]>([]);

const fetchTodoList = () => {
	todoList.value = todoStorage.getTodos().sort((a, b) => a.title.localeCompare(b.title));
};

const handleAddTodoItem = (item: string) => {
	todoList.value.push({ done: false, title: item });
	todoStorage.saveTodos(todoList.value);
};

const handleToggleTodoItem = (todoItem: Todo, index: number) => {
	todoList.value.splice(index, 1, { ...todoItem, done: !todoItem.done });
	todoStorage.saveTodos(todoList.value);
};

const handleDeleteTodoItem = (index: number) => {
	todoList.value.splice(index, 1);
	todoStorage.saveTodos(todoList.value);
};

fetchTodoList();
</script>

<style lang="scss" scoped></style>
