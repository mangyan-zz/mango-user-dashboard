/**
 * 模块路由入口
 */
import React,{PureComponent} from 'react';
import { Route } from 'mango-web/router';
import { MangoUtils } from 'mango-web';
import UserManagerPage from './pages/userManager/UserManagerPage';
import UserManagerModel from './pages/userManager/UserManagerModel';

export default class ModuleRouter extends PureComponent {

	render() {
		const {match, app} = this.props;
		return (
			<div>
				<Route
					exact
					path={`${match.path + '/UserManagerPage'}`}
					component={UserManagerPage}
					registerModel={MangoUtils.registerModel(app, UserManagerModel)}
				/>
			</div>
		);
	}
}



