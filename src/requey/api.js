/**   
 * api接口统一管理
 */
import { get, post } from './http'

export const apiAddress = data => post('api/v1/users/my_address/address_edit_before', data);   
// 登陆
export const login = data => post('/admin/api/login', data) 
// 获取用户详情
export const user = data => post('/admin/api/boss/detail', data) 
// 获取路由表接口
export const MoveRouter = data => get('/aoaoe/api/getMoveRouter', data) 