<template>
	<div class="todo-form">
		<input type="text" class="todo-form__input" placeholder="Add a new todo" v-model="todoValue" />
		<button type="button" class="todo-form__button" @click="handleAddTodo">
			<img :src="addIcon" alt="addIcon" />
			Add
		</button>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref, unref } from 'vue';

import { useTodoStore } from '../store';
import { setTodosToStorage } from '../utils';
import { addIcon } from '../assets';

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

<style lang="scss" scoped>
.todo-form {
	position: absolute;
	width: 80%;
	max-width: $content-width;
	height: $form-height;
	bottom: calc(0px - $form-height / 2);
	display: flex;
	gap: 8px;

	&__input {
		width: 100%;
		height: inherit;
		margin: 0px;
		padding: 16px;
		box-sizing: border-box;
		border-radius: 4px;
		border: 0px;
		background-color: $gray-500;
		transition: 250ms ease-out;
		font-size: 16px;
		color: $gray-100;

		&::placeholder {
			color: $gray-300;
		}

		&:hover {
			filter: brightness(80%);
		}

		&:focus {
			outline: none;
		}
	}

	&__button {
		width: inherit;
		max-width: 90px;
		border-radius: 4px;
		border: 0;
		margin: 0;
		padding: 16px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 4px;
		background-color: $primary-dark;
		color: $gray-100;
		cursor: pointer;
		transition: 250ms ease-out;

		> img {
			width: 16px;
			height: 16px;
		}

		&:hover {
			filter: brightness(80%);
		}
	}
}
</style>
