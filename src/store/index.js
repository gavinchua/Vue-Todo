import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'

Vue.use(Vuex)

// Gavin - this is 1 page so router is not used.

export default new Vuex.Store({
	state: {
		tasklist: [
			/********** Gavin - mockapi *********/
			axios.get('http://5a2b3a30955fa6001275fb68.mockapi.io/todolist')
				.then(function (response) {
					console.log(response);
				})
				.catch(function (error) {
					console.log(error);
			})
		],
		todos: [
			/********** Gavin - need use axios to load *********/
			
			// 5a2b3a30955fa6001275fb68.mockapi.io/todolist
			{id:1, text: 'example1', done:true},
			{id:2, text: 'example2', done:false}
		]
	},
	mutations: {
		addTodo({ todos }, text) {
			/********** Gavin - check empty *********/
			if (text.length) {
				todos.push({
					text,
					completed: false
				})
			}
		},
		removeTodo: ({ todos }, todo) => {
			todos.splice(todos.indexOf(todo), 1)
		},
		markTodo({ todos }, todo) {
			todos[todos.indexOf(todo)].completed = !todo.completed
		}
	},
	getters: {
		all: state => state.todos,
		completed: state => state.todos.filter(todo => todo.completed),
		pending: state => state.todos.filter(todo => !todo.completed)
	}
})
