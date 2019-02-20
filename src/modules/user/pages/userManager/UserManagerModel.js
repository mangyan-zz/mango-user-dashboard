/**
 * 用户管理
 */
import { deleteUsers, queryUsers, addUsers } from '../../services/UsersService';
import { message } from 'antd';

export default {
	namespace: 'userManager',
	state: {
		data: [],	//用户列表信息
		showAddUserModal: false,	//是否显示新增用户
	},

	reducers: {
		//刷新用户列表
		pureUsers(state, action) {
			const {value} = action.payload;
			return {
				...state,
				data: value,
				showAddUserModal: false
			};
		},

		//控制新增用户的modal
		pureShowAddUserModal(state, action) {
			return {
				...state,
				showAddUserModal: !state.showAddUserModal
			};
		},
	},

	effects: {
		//请求用户信息
		* onQueryUsers({payload}, {call, put, select}) {
			let req = {};
			const response = yield call(queryUsers, req);
			if (response) {
				yield put({
					type: 'pureUsers',
					payload: {value: response}
				});
			}
		},

		//删除用户信息
		* onDeleteUsers({payload}, {call, put, select}) {
			let req = payload.req;
			const response = yield call(deleteUsers, req);
			if (response) {
				message.success('删除成功');
				yield put({
					type: 'onQueryUsers',
					payload: {value: response}
				});
			}
		},

		//增加用户
		* onAddUsers({payload}, {call, put, select}) {
			let req = payload.req;
			const response = yield call(addUsers, req);
			if (response) {
				message.success('增加用户');
				yield put({
					type: 'onQueryUsers',
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
						type: 'onQueryUsers',
						payload: query
					});
				}
			});
		}
	}
};
