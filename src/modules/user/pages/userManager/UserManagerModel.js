/**
 * 用户管理
 */

import { users } from '../../services/UsersService';

export default {
	namespace: 'userManager',
	state: {
		data: [],	//用户列表信息
	},

	reducers: {
		//刷新用户列表
		pureUsers(state, action) {
			const {value} = action.payload;
			return {
				...state,
				data: value
			};
		},
	},

	effects: {
		//请求用户信息
		* onUsers({payload}, {call, put, select}) {
			let req = {};
			const response = yield call(users, req);
			if (response) {
				yield put({
					type: 'pureUsers',
					payload: {value: response}
				});
			}

		}
	},

	subscriptions: {
		setup({dispatch, history}) {
			return history.listen(({pathname, query}) => {
				if (pathname === '/user/UserManagerPage') {
					dispatch({
						type: 'onUsers',
						payload: query
					});
				}
			});
		}
	}
};
