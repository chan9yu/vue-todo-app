<template>
	<label>오늘 할 일: </label>
	<input type="text" :value="item" @input="handleInput" />
	<button @click="addTodo">추가하기</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		item: {
			type: String,
			required: true
		}
	},

	emits: ['input', 'add'],

	methods: {
		// InputEvent type
		handleInput(event: InputEvent) {
			const eventTarget = event.target as HTMLInputElement
			this.$emit('input', eventTarget.value)
		},
		addTodo() {
			this.$emit('add')
		}
	}
})
</script>
