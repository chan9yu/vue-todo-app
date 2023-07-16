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
import { getTodos, saveTodos } from './utils';

const todoList = ref<Todo[]>([]);

const fetchTodoList = () => {
	todoList.value = getTodos().sort((a, b) => a.title.localeCompare(b.title));
};

const handleAddTodoItem = (item: string) => {
	todoList.value.push({ done: false, title: item });
	saveTodos(todoList.value);
};

const handleToggleTodoItem = (todoItem: Todo, index: number) => {
	todoList.value.splice(index, 1, { ...todoItem, done: !todoItem.done });
	saveTodos(todoList.value);
};

const handleDeleteTodoItem = (index: number) => {
	todoList.value.splice(index, 1);
	saveTodos(todoList.value);
};

fetchTodoList();
</script>

<style lang="scss" scoped></style>
./utils
