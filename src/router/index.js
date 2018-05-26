import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({
        x: 0,
        y: 0
    }),
    routes: [
        {
            path: '/',
            component: () => import('@/components/NewsList')
        },
        // 404, 【务必】放在最后一个！
        {
            path: '*',
            name: 'notFound',
            component: () => import('@/components/NotFound')
        }
    ]
});
