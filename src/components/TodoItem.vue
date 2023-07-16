<template>
	<li>
		<span class="item" :class="todoItemClass" @click="hadnleToggleDone">
			{{ todoItem.title }}
		</span>
		&nbsp;
		<button @click="handleDeleteClick">DELETE</button>
	</li>
</template>

<script lang="ts">
import type { PropType } from 'vue';

import type { Todo } from '../@types';

export default {
	props: {
		todoItem: {
			type: Object as PropType<Todo>,
			required: true
		},
		index: {
			type: Number,
			required: true
		}
	},

	computed: {
		todoItemClass() {
			return this.todoItem.done ? 'item--complete' : null;
		}
	},

	methods: {
		hadnleToggleDone() {
			this.$emit('toggle', this.todoItem, this.index);
		},

		handleDeleteClick() {
			this.$emit('delete', this.index);
		}
	}
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
