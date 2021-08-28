<template>
	<section>
		<button @click="clearAllTodo" class="btn btn-primary">모두 지우기</button>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	methods: {
		clearAllTodo() {
			this.$emit('clear')
		}
	}
})
</script>

<style lang="scss" scoped>
section {
	width: 8.5rem;
	height: 50px;
	line-height: 50;
	background-color: $white;
	border-radius: 5px;
	margin: 0 auto;
	.btn {
		display: block;
		color: $white;
		font-weight: 600;
		width: 100%;
		height: 100%;
	}
}
</style>
