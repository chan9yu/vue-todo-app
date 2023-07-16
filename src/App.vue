<template>
	<TodoHeader />
	<TodoInput />
	<TodoList />
	<TodoFooter />
	<div class="test"></div>
</template>

<script lang="ts">
import { TodoFooter, TodoHeader, TodoInput, TodoList } from './components';

export default {
	components: {
		TodoFooter,
		TodoHeader,
		TodoInput,
		TodoList
	}
};
</script>

<style lang="scss"></style>
