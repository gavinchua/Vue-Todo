<template>
	<div class="todo">
		<form @submit.prevent="addTodo(text); text=''">
			<input
			  class="form-control"
			  type="text"
			  placeholder="What must be done?"
			  v-model="text"
			/>
			<button class="btn"> Add Todo </button>
		</form>
		<ul>
			<li
			  v-for="(todo, index) in todos"
			  :key="index"
			>
				<label>
					<input
					  type="checkbox"
					  title="mark todo"
					  @change="markTodo(todo)"
					  :checked="todo.completed"
					/>
					<span :class="{completed: todo.completed}">{{ todo.text }}</span>
				</label>
				<button class="btn" @click="removeTodo(todo)">x</button>
				</li>
		</ul>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
	data() {
		return {
			text: '',
			visible: 'all'
		}
	},

	computed: {
		todos() {
			return this.$store.getters[this.visible]
		},
		...mapGetters(['pending', 'completed', 'all'])
	},

	methods: mapMutations([
		'addTodo',
		'removeTodo',
		'markTodo'
	])
}
</script>

<style>
	form {
		margin-bottom: 20px;
	}
	.todo {
		text-align: left;
		padding: 5px;
		margin: auto;
		transition: all 0.5s;
		max-width: 300px;
	}
	.form-control {
		display: inline-block;
		vertical-align: middle;
		max-width: 190px;
		margin-right: 5px;
	}
	.completed {
		color: #888;
		text-decoration: line-through;
	}

	li {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 10px;
	}

	li input,
	li span {
		display: inline-block;
		vertical-align: middle;
		margin: 0!important;
	}
	
	li span {
		width: 225px;
		margin: 0 5px!important;
	}
	.btn {
		height: 34px;
	}
</style>
