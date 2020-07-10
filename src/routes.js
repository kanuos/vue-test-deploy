import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home.vue';
import List from './views/List.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes : [
        {path : "/", component: Home},
        {path : "/mylist", component: List}
    ]
});