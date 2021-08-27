<template>
	<li>
		<span class="item" :class="todoItemClass" @click="toggleItem">
			{{ todoItem.title }}
		</span>
		<button @click="removeTodo">삭제</button>
	</li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TodoItem } from '@/App.vue'

export default defineComponent({
	props: {
		todoItem: {
			type: Object as PropType<TodoItem>,
			required: true
		},
		index: Number
	},

	emits: ['remove', 'toggle'],

	computed: {
		todoItemClass(): string | null {
			return this.todoItem.complete ? 'complete' : null
		}
	},

	methods: {
		toggleItem() {
			this.$emit('toggle', this.todoItem, this.index)
		},
		removeTodo() {
			this.$emit('remove', this.index)
		}
	}
})
</script>

<style lang="scss" scoped>
.item {
	cursor: pointer;
}
.complete {
	text-decoration: line-through;
}
</style>
