/**
 * 用户列表
 */
import React, { PureComponent } from 'react';
import { connect, MangoUtils } from 'mango-web';
import { Table, Divider, Button } from 'antd';
import Themes from '../../../../assets/Themes';
import ModuleCode from '../../ModuleCode';
import Strings from '../../Strings';
import AppCode from '../../../../global/AppCode';
import AddUserFragment from './fragments/AddUserFragment';

let cnx;
const columns = [
	{title: Strings.name, dataIndex: 'name', key: 'name',},
	{title: Strings.email, key: 'email', dataIndex: 'email',},
	{title: Strings.website, dataIndex: 'website', key: 'website',},
	{
		title: Strings.operate, key: 'action',
		render: (text, record) => (
			<span>
				<Button onClick={() => {
					alert('编辑');
				}}>{Strings.edit}</Button>
				<Divider type="vertical"/>
				<Button onClick={() => {
					MangoUtils.dispatch(cnx, ModuleCode.userManager, 'onDeleteUsers', {req: record.id});
				}}>{Strings.delete}</Button>
			</span>
		),
	}
];

@connect(({userManager, loading}) => ({userManager, pageLoading: loading.effects['userManager/onQueryUsers']}))
class UserManagerPage extends PureComponent {

	constructor(props) {
		super(props);
		this.data = {};
	}

	render() {

		const {pageLoading} = this.props;
		const {data} = this.props.userManager;
		cnx = this;

		return (
			<div style={Themes.container}>
				<Table
					columns={columns}
					dataSource={data}
					loading={pageLoading}
					pagination={{pageSize: AppCode.PAGESIZE}}
				/>

				<Button
					type={'primary'}
					style={{display: 'flex', alignSelf: 'right'}}
					onClick={() => {
						MangoUtils.dispatch(this, ModuleCode.userManager, 'pureShowAddUserModal');
					}}>
					新增用户
				</Button>

				<AddUserFragment/>
			</div>
		);
	}

}

const styles = {
	container: {},
};

export default UserManagerPage;
