<template>
	<header>
		<h1>Jebong's TodoList!</h1>
	</header>
	<main>
		<TodoInput :item="todoText" @input="updateTodoText" @add="addTodoItem" />
	</main>
	<div>
		<ul>
			<TodoListItem
				v-for="(todoItem, index) in todoItems"
				:key="index"
				:index="index"
				:todoItem="todoItem"
				@toggle="toggleTodoItme"
				@remove="removeTodoItem"
			/>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoInput from '@/components/TodoInput.vue'
import TodoListItem from '@/components/TodoListItem.vue'

const STORAGE_KEY = 'todo-items'
const storage = {
	save(todoItems: TodoItem[]) {
		const parsed = JSON.stringify(todoItems)
		localStorage.setItem(STORAGE_KEY, parsed)
	},
	fetch(): TodoItem[] {
		const todoItems = localStorage.getItem(STORAGE_KEY) || '[]'
		const res = JSON.parse(todoItems)
		return res
	}
}

export interface TodoItem {
	title: string
	complete: boolean
}

export default defineComponent({
	components: {
		TodoInput,
		TodoListItem
	},

	data() {
		return {
			todoText: '',
			todoItems: [] as TodoItem[]
		}
	},

	methods: {
		updateTodoText(value: string) {
			this.todoText = value
		},
		addTodoItem() {
			const value = this.todoText
			this.todoItems.push({
				title: value,
				complete: false
			})
			storage.save(this.todoItems)
			this.initTodoText()
		},
		initTodoText() {
			this.todoText = ''
		},
		fetchTodoItems() {
			this.todoItems = storage.fetch().sort((a, b) => {
				if (a.title < b.title) {
					return -1
				}
				if (a.title > b.title) {
					return 1
				}
				return 0
			})
		},
		toggleTodoItme(todoItem: TodoItem, index: number) {
			this.todoItems.splice(index, 1, {
				...todoItem,
				complete: !todoItem.complete
			})
			storage.save(this.todoItems) // 삭제 후, 갱신
		},
		removeTodoItem(index: number) {
			this.todoItems.splice(index, 1)
			storage.save(this.todoItems)
		}
	},

	created() {
		this.fetchTodoItems()
	}
})
</script>

<style lang="scss"></style>
