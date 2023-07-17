<template>
	<li>
		<span :class="itemClass" @click="handleToggleDone">
			{{ todoItem.content }}
		</span>
		&nbsp;
		<button @click="handleDeleteItem">DELETE</button>
	</li>
</template>

<script setup lang="ts">
import { computed, toRefs, unref } from 'vue';
import { storeToRefs } from 'pinia';

import type { Todo } from '../@types';
import { useTodoStore } from '../store';
import { setTodosToStorage } from '../utils';

const props = defineProps<{ todoItem: Todo }>();
const { todoItem } = toRefs(props);

const todoStore = useTodoStore();
const { checkTodo, removeTodo } = todoStore;
const { todoList } = storeToRefs(todoStore);

const itemClass = computed(() => ['item', todoItem.value.done ? 'item--complete' : '']);

const handleToggleDone = () => {
	checkTodo(todoItem.value.id);
	setTodosToStorage(unref(todoList));
};

const handleDeleteItem = () => {
	removeTodo(todoItem.value.id);
	setTodosToStorage(unref(todoList));
};
</script>

<style lang="scss" scoped>
.item {
	cursor: pointer;

	&--complete {
		text-decoration: line-through;
	}
}
</style>
../@types/common
