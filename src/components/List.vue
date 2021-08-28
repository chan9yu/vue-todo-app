<template>
	<li class="list-group-item">
		<i @click="toggleItem" class="material-icons done" :class="checkCompleted">
			done
		</i>
		<span :class="todoCompleted">
			{{ todoItem.title }}
		</span>
		<button @click="removeTodo" class="btn btn-danger">
			<i class="material-icons">delete</i>
		</button>
	</li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TodoItem } from '@/api/interface'

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
		checkCompleted(): string | null {
			return this.todoItem.complete ? 'checkCompleted' : null
		},
		todoCompleted(): string | null {
			return this.todoItem.complete ? 'todoCompleted' : null
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
.list-group-item {
	display: flex;
	margin-bottom: 1rem;
	border-radius: 30px !important;
	box-shadow: 5px 10px 10px rgba($color: #000000, $alpha: 0.03);
	.todoCompleted {
		text-decoration: line-through;
	}
	.btn {
		position: absolute;
		height: 100%;
		border-radius: 0 30px 30px 0;
		top: 0;
		right: 0;
	}
	.material-icons {
		cursor: pointer;
		display: block;
		&.done {
			color: $primary;
			margin-right: 10px;
		}
		&.checkCompleted {
			color: $gray-300;
		}
	}
}
</style>
