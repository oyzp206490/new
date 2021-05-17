// 开发环境导入组件

function _import (file) {
    return () => import('@/views/' + file + '.vue')
}
