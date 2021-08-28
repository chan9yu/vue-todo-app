<template>
	<Header />
	<Input
		:item="todoText"
		:showModal="showModal"
		@modal="closeShowModal"
		@input="updateTodoText"
		@add="addTodoItem"
	/>
	<section class="container items">
		<TransitionGroup name="list" tag="ul" class="list-group">
			<List
				v-for="(todoItem, index) in todoItems"
				:key="index"
				:index="index"
				:todoItem="todoItem"
				@toggle="toggleTodoItme"
				@remove="removeTodoItem"
			/>
		</TransitionGroup>
	</section>
	<Delete @clear="removeAllTodoItem" />
	<Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { save, fetch, clear } from '@/api/index'
import { TodoItem } from '@/api/interface'
import Header from '@/components/Header.vue'
import Input from '@/components/Input.vue'
import List from '@/components/List.vue'
import Delete from '@/components/Delete.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
	components: {
		Header,
		Input,
		List,
		Delete,
		Footer
	},

	data() {
		return {
			todoText: '',
			todoItems: [] as TodoItem[],
			showModal: false
		}
	},

	methods: {
		updateTodoText(value: string) {
			this.todoText = value
		},
		addTodoItem() {
			if (this.todoText !== '') {
				const value = this.todoText
				this.todoItems.push({
					title: value,
					complete: false
				})
				save(this.todoItems)
				this.initTodoText()
			} else {
				this.showModal = !this.showModal
			}
		},
		initTodoText() {
			this.todoText = ''
		},
		fetchTodoItems() {
			this.todoItems = fetch().sort((a, b) => {
				if (a.title < b.title) {
					return -1
				}
				if (a.title > b.title) {
					return 1
				}
				return 0
			})
		},
		closeShowModal() {
			this.showModal = false
		},
		toggleTodoItme(todoItem: TodoItem, index: number) {
			this.todoItems.splice(index, 1, {
				...todoItem,
				complete: !todoItem.complete
			})
			save(this.todoItems) // 삭제 후, 갱신
		},
		removeTodoItem(index: number) {
			this.todoItems.splice(index, 1)
			save(this.todoItems)
		},
		removeAllTodoItem() {
			clear()
			this.todoItems = []
		}
	},

	created() {
		this.fetchTodoItems()
	}
})
</script>

<style lang="scss">
body {
	text-align: center;
	background-color: $gray-300;
}

.items {
	margin-top: 3%;
	.list-group {
		position: relative;
	}
}

/*리스트 트렌지션*/
.list-enter-active,
.list-leave-active {
	transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateY(10px);
}
</style>
