<template>
	<li>
		<span>{{ todoItem }}</span>
		&nbsp;
		<button @click="handleDeleteClick">DELETE</button>
	</li>
</template>

<script lang="ts">
export default {
	props: {
		todoItem: String,
		index: Number
	},

	methods: {
		handleDeleteClick() {
			this.$emit('delete', this.index);
		}
	}
};
</script>

<style lang="scss" scoped></style>
