<template>
	<div>
		<label for="todo-input">Todo: </label>
		<input id="todo-input" type="text" v-model="todoItem" />
		<button @click="handleAddTodo" type="button">ADD</button>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const todoItem = ref('');
const emit = defineEmits(['add']);

const handleAddTodo = () => {
	emit('add', todoItem.value);
	clearTodoInput();
};

const clearTodoInput = () => {
	todoItem.value = '';
};
</script>

<style lang="scss" scoped></style>
