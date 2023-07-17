<template>
	<li class="todo-item">
		<img class="todo-item__icon" :src="itemCheckbtnSrc" @click="handleToggleDone" />
		<input
			v-if="editMode === todoItem.id"
			class="todo-item__edit-input"
			type="text"
			v-model="todoItem.content"
			@keyup.enter="handleEditTodo"
		/>
		<span v-else :class="itemContentClass">
			{{ todoItem.content }}
		</span>
		<div class="todo-item__icon-group">
			<img
				v-if="editMode === todoItem.id"
				class="todo-item__icon"
				:src="saveSvg"
				alt="save"
				@click="handleEditTodo"
			/>
			<img
				v-else
				class="todo-item__icon"
				:src="editSvg"
				alt="edit"
				@click="hadnleChangeTodoEditMode"
			/>
			<img class="todo-item__icon" :src="deleteSvg" alt="delete" @click="handleDeleteItem" />
		</div>
	</li>
</template>

<script setup lang="ts">
import { computed, toRefs, unref } from 'vue';
import { storeToRefs } from 'pinia';

import type { Todo } from '../@types';
import { useTodoStore } from '../store';
import { setTodosToStorage } from '../utils';
import { checkSvg, uncheckSvg, saveSvg, editSvg, deleteSvg } from '../assets';

const props = defineProps<{ todoItem: Todo }>();
const { todoItem } = toRefs(props);

const todoStore = useTodoStore();
const { checkTodo, editTodo, removeTodo, changeTodoEditMode, closeTodoEditMode } = todoStore;
const { todoList, editMode } = storeToRefs(todoStore);

const itemContentClass = computed(() => [
	'todo-item__content',
	todoItem.value.done ? 'todo-item__content--done' : ''
]);

const itemCheckbtnSrc = computed(() => (todoItem.value.done ? checkSvg : uncheckSvg));

const handleToggleDone = () => {
	checkTodo(todoItem.value.id);
	setTodosToStorage(unref(todoList));
};

const handleEditTodo = () => {
	if (!todoItem.value.content) return alert('값은 필수입니다');
	editTodo(unref(todoItem));
	closeTodoEditMode();
	setTodosToStorage(unref(todoList));
};

const hadnleChangeTodoEditMode = () => {
	changeTodoEditMode(todoItem.value.id);
};

const handleDeleteItem = () => {
	removeTodo(todoItem.value.id);
	setTodosToStorage(unref(todoList));
};
</script>

<style lang="scss" scoped>
.todo-item {
	width: inherit;
	background-color: $gray-500;
	display: flex;
	padding: 16px;
	box-sizing: border-box;
	align-items: center;
	gap: 12px;
	border-radius: 8px;
	border: 1px solid $gray-400;

	&__edit-input {
		flex-grow: 1;
		background-color: transparent;
		border: 0;
		font-size: 13px;
		border-bottom: 1px solid $primary-dark;
		color: $gray-100;

		&:focus {
			outline: none;
		}
	}

	&__content {
		flex-grow: 1;
		color: $gray-100;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;

		&--done {
			text-decoration: line-through;
			color: $gray-300;
		}
	}

	&__icon {
		width: 18px;
		height: 18px;
		cursor: pointer;
		border-radius: 50%;
		transition: 250ms ease-out;

		&:hover {
			filter: brightness(80%);
		}
	}

	&__icon-group {
		flex-shrink: 0;
		display: flex;
		gap: 8px;
	}
}
</style>
