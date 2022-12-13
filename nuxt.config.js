module.exports = {
    router: {
        linkActiveClass: 'active-link',
        extendRoutes(routes, reslove) {
            routes.splice(0)
            routes.push(...[{
                name: 'index',
                path: '/',
                component: reslove(__dirname, 'pages/index')
            }, {
                name: 'editor',
                path: '/editor',
                component: reslove(__dirname, 'pages/editor')
            },
            ])
        }
    }
}