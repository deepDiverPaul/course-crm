import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from'../views/Login'
import Customers from "../views/Customers";
import CustomerAdd from "../views/Customer/Add";
import CoursesCalendar from "../views/Courses/Calendar";
import CoursesAdd from "../views/Courses/Add";
import Courses from "../views/Courses";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login/',
        name: 'Login',
        component: Login
    },
    {
        path: '/customers/',
        name: 'Customers',
        component: Customers
    },
    {
        path: '/customer/add/',
        name: 'CustomerAdd',
        component: CustomerAdd
    },
    {
        path: '/customer/edit/',
        name: 'CustomerEdit',
        component: CustomerAdd
    },
    {
        path: '/courses/',
        name: 'Courses',
        component: Courses
    },
    {
        path: '/courses/add/',
        name: 'CoursesAdd',
        component: CoursesAdd
    },
    {
        path: '/courses/edit/',
        name: 'CoursesEdit',
        component: CoursesAdd
    },
    {
        path: '/courses/calendar/',
        name: 'CoursesCalendar',
        component: CoursesCalendar
    },
    {
        path: '*',
        redirect: { name: 'Home' }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
