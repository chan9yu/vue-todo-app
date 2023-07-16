<template>
	<main>
		<ul>
			<TodoItem
				v-for="(todoItem, index) in todoList"
				:key="index"
				:todoItem="todoItem"
				:index="index"
				@toggle="handleToggleTodoItem"
				@delete="handleDeleteTodoItem"
			/>
		</ul>
	</main>
</template>

<script lang="ts">
import type { PropType } from 'vue';

import type { Todo } from '../@types';
import TodoItem from './TodoItem.vue';

export default {
	components: {
		TodoItem
	},

	props: {
		todoList: {
			type: Array as PropType<Todo[]>,
			required: true
		}
	},

	methods: {
		handleToggleTodoItem(todoItem: Todo, index: number) {
			this.$emit('toggle', todoItem, index);
		},

		handleDeleteTodoItem(index: number) {
			this.$emit('delete', index);
		}
	}
};
</script>

<style lang="scss" scoped></style>
