<template>
	<main class="todo-list">
		<TodoInfo />
		<ul v-if="todoList.length" class="todo-list__wrapper">
			<TodoItem v-for="todoItem in todoList" :key="todoItem.id" :todoItem="todoItem" />
		</ul>
		<div v-else class="todo-list__empty">
			<img class="todo-list__empty__img" :src="paperPng" alt="todo item empty" />
			<div class="todo-list__empty__contents">
				<span>내용이 비어있습니다.</span>
				<span>자유롭게 내용을 추가해보세요!</span>
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { paperPng } from '../assets';
import { TodoInfo, TodoItem } from '../components';
import { useTodoStore } from '../store';
import { getTodosFromStorage } from '../utils';

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
	margin: calc($form-height / 2) 0;
	display: flex;
	flex-direction: column;
	gap: 24px;

	&__wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	&__empty {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		padding: 64px 0;

		&__img {
			width: 48px;
			height: 48px;
		}

		&__contents {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 4px;

			> span {
				color: $gray-300;
			}

			:first-of-type {
				font-weight: 800;
			}

			:last-of-type {
				font-weight: 400;
			}
		}
	}
}
</style>
