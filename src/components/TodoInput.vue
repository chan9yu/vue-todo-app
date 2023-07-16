<template>
	<div>
		<label for="todo-input">Todo: </label>
		<input id="todo-input" type="text" v-model="todoItem" />
		<button @click="handleAddClick" type="button">ADD</button>
	</div>
</template>

<script lang="ts">
export default {
	data() {
		return {
			todoItem: ''
		};
	},

	methods: {
		initTodoText() {
			this.todoItem = '';
		},

		handleAddClick() {
			this.$emit('add', this.todoItem);
			this.initTodoText();
		}
	}
};
</script>

<style lang="scss" scoped></style>
