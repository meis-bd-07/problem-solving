const items = [
    {id: 1, name: 'Root', path: '/'},
    {id: 2, name: 'Analytics Details', path: '/analytics/details'},
    {id: 3, name: 'User Details', path: '/dashboard/user/details'},
    {id: 4, name: 'Dashboard', path: '/dashboard'},
    {id: 5, name: 'User', path: '/dashboard/user'},
    {id: 5, name: 'User Edit', path: '/dashboard/user/edit'},
    {id: 6, name: 'Setting', path: '/dashboard/settings'},
    {id: 7, name: 'Analytics', path: '/analytics'},
]

const makeTree = (routes) => {
    const pathHash = new Map();
    routes.forEach(route => pathHash.set(route.path, route));

    const tree = [];
    for (const route of routes) {
        let parent = null;
        for (const [path, pathDetails] of pathHash) {
            if (
                route.path !== path &&
                (path === "/" || route.path.startsWith(path + "/"))
            ) {
                if (!parent || path.length > parent.path.length) {
                    parent = pathDetails;
                }
            }
        }

        if (parent) {
            if(parent.children){
                parent.children.push(route);
            }
            else{
                parent.children = [route];
            }
        } else {
            tree.push(route);
        }
    }
    return tree;
}

console.log(JSON.stringify(makeTree(items), null, 2));

const outputs = [
    {
        id: 1,
        name: 'Root',
        path: '/',
        children: [
            {
                id: 4,
                name: '/dashboard',
                path: '/dashboard',
                children: [
                    {
                        id: 5,
                        name: 'User',
                        path: '/dashboard/user',
                        children: [
                            {
                                id: 3,
                                name: 'User Details',
                                path: '/dashboard/user/details'
                            },
                            {
                                id: 5,
                                name: 'User edit',
                                path: '/dashboard/user/edit'
                            }
                        ]
                    },
                    {
                        id: 6,
                        name: 'Setting',
                        path: '/dashboard/settings',
                        children: []
                    }
                ]
            },
            {
                id: 7,
                name: 'Analytics',
                path: '/analytics',
                children: [
                    {
                        id: 2,
                        name: 'Analytics Details',
                        path: '/analytics/details',
                        children: []
                    }
                ]
            }
        ]
    }
]