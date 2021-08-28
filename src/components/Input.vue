<template>
	<section class="container">
		<input
			:value="item"
			@keyup.enter="addTodo"
			@input="handleInput"
			class="form-control"
			placeholder="내용을 입력해주세요!"
			type="text"
		/>
		<button @click="addTodo" class="btn btn-primary">저장</button>
	</section>
	<Modal v-if="showModal" @close="closeShowModal">
		<template #header>
			<h3>내용이 없어요!</h3>
			<i @click="closeShowModal" class="material-icons">close </i>
		</template>
		<template #body> 아무것도 입력하지 않았어요! </template>
	</Modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Modal from '@/components/Modal.vue'

export default defineComponent({
	components: {
		Modal
	},

	props: {
		item: {
			type: String,
			required: true
		},
		showModal: Boolean
	},

	emits: ['input', 'add', 'modal'],

	methods: {
		// InputEvent type
		handleInput(event: InputEvent) {
			const eventTarget = event.target as HTMLInputElement
			this.$emit('input', eventTarget.value)
		},
		addTodo() {
			this.$emit('add')
		},
		closeShowModal() {
			this.$emit('modal')
		}
	}
})
</script>

<style lang="scss" scoped>
section {
	display: flex;
	flex-direction: row;
	justify-content: center;
	.form-control {
		width: 80%;
	}
	.btn {
		color: $white;
		margin-left: 10px;
	}
	.material-icons {
		color: $primary;
	}
	i {
		margin-left: 1rem;
	}
}
</style>
