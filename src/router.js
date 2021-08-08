import {
    createRouter,
    createWebHistory
} from 'vue-router';
import HomePage from './components/HomePage.vue';
import LoginForm from "./components/Forms/LoginForm";
import SignupForm from "./components/Forms/SignupForm";

import DashboardLanding from "./components/DashboardLanding";
const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            redirect: '/homepage'
        },
        {
            path: '/homepage',
            components: {
                homePage: HomePage
            }
        },
        {
            path: '/login',
            component: LoginForm
        },
        {
            path: '/signup',
            component: SignupForm
        },
        {
            path: '/dashboard',
            component: DashboardLanding
            
        },

    ]
});
export default router;