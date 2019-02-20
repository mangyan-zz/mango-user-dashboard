import { requestPost, requestGet } from '../../../utils/RequestUtils';

/**
 * 查询用户
 * @param req
 * @returns {Promise<void>}
 */
export async function queryUsers(req) {
	return requestGet('users', req);
}

/**
 * 删除用户
 * @param req
 * @returns {Promise<void>}
 */
export async function deleteUsers(req) {
	return requestGet('users/' + req, null, {
		method: 'DELETE'
	});
}

/**
 * 新增用户
 * @param req
 * @returns {Promise<void>}
 */
export async function addUsers(req) {
	return requestPost('users', req);
}
