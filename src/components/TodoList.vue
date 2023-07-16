<template>
	<main>
		<ul>
			<TodoItem v-for="(todoItem, index) in todoList" :key="index" :todoItem="todoItem" />
		</ul>
	</main>
</template>

<script lang="ts">
import TodoItem from './TodoItem.vue';

export default {
	props: {
		todoList: {
			type: Array as () => Array<string>,
			required: true
		}
	},

	components: {
		TodoItem
	}
};
</script>

<style lang="scss" scoped></style>
