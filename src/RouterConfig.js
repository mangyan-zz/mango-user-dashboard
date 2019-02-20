/**
 * 路由表配置管理
 */
import React from 'react';
import { Router, Route, Switch } from 'mango-web/router';

import { ModuleRouter as DemoModuleRouter } from './modules/demo';
import { RouterUtils } from 'mango-web';
import App from './App';
import ErrorPage from './layout/ErrorPage';
import AsyncComponent from './components/async/AsyncComponent';

let appHistory = null;

const AsyncUser = AsyncComponent(() => import('./modules/user/ModuleRouter'));

const RouterConfig = ({history, app}) => {

	RouterUtils.history = history;

	//监听路由变化
	listenRouter(history);

	return (

		<Router history={history}>
			<Switch>

				<Route exact path="/" component={App}/>

				{/*Demo模块*/}
				<Route path="/new" render={(props) => (<DemoModuleRouter {...props} app={app}/>)}/>

				{/*用户中心模块*/}
				<Route path="/user" render={(props) => (<AsyncUser {...props} app={app}/>)}/>

				{/*Error界面*/}
				<Route path="/ErrorPage" component={ErrorPage}/>

			</Switch>
		</Router>
	);
};

function listenRouter(history) {
	history.listen((e) => {

	});
}

export { RouterConfig, appHistory as history };
