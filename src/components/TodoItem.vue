<template>
	<li>
		<span :class="itemClass" @click="handleToggleDone">
			{{ props.todoItem.title }}
		</span>
		&nbsp;
		<button @click="handleDeleteItem">DELETE</button>
	</li>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import type { Todo } from '../@types';

interface TodoItemProps {
	todoItem: Todo;
	index: number;
}

const props = defineProps<TodoItemProps>();
const emit = defineEmits(['toggle', 'delete']);

const itemClass = computed(() => ['item', props.todoItem.done ? 'item--complete' : '']);

const handleToggleDone = () => emit('toggle', props.todoItem, props.index);
const handleDeleteItem = () => emit('delete', props.index);
</script>

<style lang="scss" scoped>
.item {
	cursor: pointer;

	&--complete {
		text-decoration: line-through;
	}
}
</style>
