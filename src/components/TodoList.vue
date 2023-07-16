<template>
	<main>
		<ul>
			<TodoItem
				v-for="(todoItem, index) in todoList"
				:key="index"
				:todoItem="todoItem"
				:index="index"
				@delete="handleDeleteTodoItem"
			/>
		</ul>
	</main>
</template>

<script lang="ts">
import TodoItem from './TodoItem.vue';

export default {
	components: {
		TodoItem
	},

	props: {
		todoList: {
			type: Array as () => Array<string>,
			required: true
		}
	},

	methods: {
		handleDeleteTodoItem(index: number) {
			this.$emit('delete', index);
		}
	}
};
</script>

<style lang="scss" scoped></style>
