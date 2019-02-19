import { requestPost, requestGet } from '../../../utils/RequestUtils';

/**
 * API
 * @param req
 * @returns {Promise<void>}
 */
export async function users(req) {
	return requestGet('users', req);
}
