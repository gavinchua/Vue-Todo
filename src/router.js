import Vue from 'vue'
import VueRouter from 'vue-router'

//import WelcomePage from './containers/welcome.vue'
//import DashboardPage from './containers/dashboard.vue'

Vue.use(Router)

//import home from './containers/Home'

// application routes
const routes = [
	//{ path: '/', component: WelcomePage },
	//{ path: '/dashboard', component: DashboardPage }
]

// export router instance
export default new VueRouter(
	{mode: 'history', routes}
)