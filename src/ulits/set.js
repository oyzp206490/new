export const menuList = [
    {
        name: "首页",
        value: 'home',
        to: "/",
        icon: "md-home"
    },
    {
        name: "系统管理",
        value: 'role',
        to: "/role",
        icon: "ios-settings",
        children: [
            {
                name: "菜单管理",
                value: "menu",
                to: '/menu'
            },
            {
                name: "用户管理",
                value: "user",
                to: '/user'
            },
            {
                name: "角色管理",
                value: "role",
                to: '/role'
            },
        ]
    },
    // {
    //     name: "数据维护",
    //     value: 'data_maintain',
    //     icon: "md-build",
    //     children: [{
    //         name: "维护",
    //         value: "maintain",
    //         to: '/maintain/:type'
    //     },
    //     // {
    //     // 	name: "超链维护",
    //     // 	value: "link_maintain",
    //     // 	to: '/link_maintain/:type'
    //     // },
    //     {
    //         name: "维护列表",
    //         value: "list_maintain",
    //         to: '/list_maintain/:type'
    //     }
    //     ]
    // },
    // {
    //     name: "数据录入",
    //     value: 'data_intenet',
    //     icon: "md-create",
    //     children: [{
    //         name: "网上录入",
    //         value: "internet_included",
    //         to: '/internet_included/:type'
    //     },
    //     {
    //         name: "标题录入",
    //         value: "title_included",
    //         to: '/title_included/:type'
    //     },
    //     {
    //         name: "正文录入",
    //         value: "cont_included",
    //         to: '/cont_included/:type'
    //     }
    //     ]
    // },
    // {
    //     name: "数据审核",
    //     value: 'data_verify',
    //     icon: "md-options",
    //     children: [{
    //         name: "一校",
    //         value: "first_verify",
    //         to: '/first_verify/:type'
    //     },
    //     {
    //         name: "终校",
    //         value: "end_verify",
    //         to: '/end_verify/:type'
    //     }
    //     ]
    // },
    // {
    //     name: "数据雷达",
    //     value: 'data_radar',
    //     icon: "md-link",
    //     children: [
    //         {
    //             name: "雷达导入",
    //             value: "radar",
    //             to: '/radar/:type'
    //         },
    //         {
    //             name: "雷达日志",
    //             value: "journal",
    //             to: '/journal/:type'
    //         }
    //     ]
    // },
    // {
    //     name: "系统管理",
    //     value: 'sys_admin',
    //     icon: "md-person",
    //     children: [{
    //         name: "统计查看",
    //         value: "tables",
    //         to: '/tables'
    //     }, {
    //         name: "用户管理",
    //         value: "user_manage",
    //         to: '/user_manage'
    //     }, {
    //         name: "权限管理",
    //         value: "limits_manage",
    //         to: '/limits_manage'
    //     }]
    // },
    // {
    //     name: "深加工",
    //     value: 'deep_processing',
    //     to: "/deep_processing/:type",
    //     icon: "md-document"
    // }
]