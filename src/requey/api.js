/**   
 * api接口统一管理
 */
import { get, post } from './http'

export const apiAddress = data => post('api/v1/users/my_address/address_edit_before', data);   

export const login = data => post('/admin/api/login', data) 