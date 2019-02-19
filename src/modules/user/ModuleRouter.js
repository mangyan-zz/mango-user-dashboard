import React from 'react';
import { Route } from 'mango-web/router';
import { MangoUtils } from 'mango-web';
import UserManagerPage from './pages/userManager/UserManagerPage';
import UserManagerModel from './pages/userManager/UserManagerModel';

const ModuleRouter = (props) => {

	const {match, app} = props;

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
};

export { ModuleRouter };





