<template>
	<div class="todo-app">
		<div class="todo-app__top">
			<TodoHeader />
			<TodoForm />
		</div>
		<TodoList />
	</div>
</template>

<script setup lang="ts">
import { TodoForm, TodoHeader, TodoList } from './components';
</script>

<style lang="scss">
* {
	font-family: 'Pretendard' !important;
}

body {
	background-color: $gray-600;
	color: $gray-100;
	font-size: 14px;
	font-weight: 400;
}

.todo-app {
	width: inherit;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;

	&__top {
		width: 100%;
		height: 200px;
		background-color: $gray-700;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
}
</style>
