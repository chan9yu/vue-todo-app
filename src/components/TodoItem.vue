<template>
	<li>{{ todoItem }}</li>
</template>

<script lang="ts">
export default {
	props: {
		todoItem: String
	}
};
</script>

<style lang="scss" scoped></style>
