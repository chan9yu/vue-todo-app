<template>
	<main>
		<ul>
			<TodoItem
				v-for="(todoItem, index) in props.todoList"
				:key="index"
				:todoItem="todoItem"
				:index="index"
				@toggle="handleToggleItem"
				@delete="handleDeleteItem"
			/>
		</ul>
	</main>
</template>

<script setup lang="ts">
import type { Todo } from '../@types';
import TodoItem from './TodoItem.vue';

interface TodoListProps {
	todoList: Todo[];
}

const props = defineProps<TodoListProps>();
const emit = defineEmits(['toggle', 'delete']);

const handleToggleItem = (todoItem: Todo, index: number) => emit('toggle', todoItem, index);
const handleDeleteItem = (index: number) => emit('delete', index);
</script>

<style lang="scss" scoped></style>
