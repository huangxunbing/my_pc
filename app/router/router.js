import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/index',
            name: 'index',
            component: () => import('../layouts/index.vue'),
            children: [
                {
                    path: 'index',
                    name: 'index',
                    component: () => import('../views/index/index.vue'),
                    meta:{
                        'A': 'index',
                    },
                },
                {
                    path: 'caigou',
                    name: 'caigou',
                    component: () => import('../layouts/side.vue'),
                    redirect: {
                        name: 'jinhuo'
                    },
                    children: [
                        {
                            path: 'jinhuo',
                            name: 'jinhuo',
                            component: () => import('../views/cg_jinhuo/Cg-jinhuo.vue'),
                            meta: {
                                'A': 'caigou',
                                'B': 'jinhuo',
                                
                            }
                        },
                        {
                            path: 'richang',
                            name: 'richang',
                            component: () => import('../views/cg_richang/Cg-richang.vue'),
                            meta: {
                                'A': 'caigou',
                                'B': 'richang',
                            }
                        },
                        {
                            path: 'tuihuo',
                            name: 'tuihuo',
                            component: () => import('../views/cg_tuihuo/Cg-tuihuo.vue'),
                            meta: {
                                'A': 'caigou',
                                'B': 'tuihuo',
                                
                            }
                        }
                    ]
                },
                {
                    path: 'caiwu',
                    name: 'caiwu',
                    component: () => import('../layouts/side.vue'),
                    redirect: {
                        name: 'zxgl'
                    },
                    children: [
                        {
                            path: 'pingzheng',
                            name: 'pingzheng',
                            component: () => import('../views/cw_pingzheng/Cw-pingzheng.vue'),
                            meta: {
                                'A': 'caiwu',
                                'B': 'pingzheng',
                            }
                        },
                        {
                            path: 'zxgl',
                            name: 'zxgl',
                            component: () => import('../views/cw_zxgl/Cw-zxgl.vue'),
                            meta: {
                                'A': 'caiwu',
                                'B': 'zxgl',
                            }
                        },
                    ]
                }
            ]
        },
    ],
});

export default router;