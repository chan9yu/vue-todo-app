<template>
	<footer>
		<a href="https://github.com/ChangyuYeo" target="_blank">
			<i class="bi bi-github"></i>
			<span>(c){{ getYear }} ChanGyu</span>
		</a>
	</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	computed: {
		getYear(): number {
			return new Date().getFullYear()
		}
	}
})
</script>

<style lang="scss" scoped>
footer {
	padding: 3% 0;
	text-align: center;
	opacity: 0.3;
	a {
		display: flex;
		flex-direction: column;
		.bi-github {
			font-size: 2rem;
			color: $primary;
			margin-bottom: 0.7%;
		}
	}
}
</style>
