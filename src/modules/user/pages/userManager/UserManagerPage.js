/**
 * 用户列表
 */
import React, { PureComponent } from 'react';
import { connect } from 'mango-web';
import { Table, Divider } from 'antd';
import Themes from '../../../../assets/Themes';

@connect(({userManager, loading}) => ({userManager, pageLoading: loading.effects['userManager/onUsers']}))
class UserManagerPage extends PureComponent {

	constructor(props) {
		super(props);
		this.data = {};
	}

	componentWillMount() {
		console.log('111' + JSON.stringify(this.props.userManager));
	}

	componentDidMount() {
		console.log('333' + JSON.stringify(this.props.userManager));
	}

	componentDidUpdate() {
		console.log('444' + JSON.stringify(this.props.userManager));
	}

	render() {
		const {pageLoading} = this.props;
		const {data} = this.props.userManager;

		const columns = [
			{
				title: '名称',
				dataIndex: 'name',
				key: 'name',
			}, {
				title: '电子邮箱',
				key: 'email',
				dataIndex: 'email',
			}, {
				title: '网站',
				dataIndex: 'website',
				key: 'website',
			}, {
				title: '操作',
				key: 'action',
				render: (text, record) => (
					<span>
      <a href="javascript:;">编辑</a>
      <Divider type="vertical"/>
      <a href="javascript:;">删除</a>
    </span>
				),
			}
		];

		return (
			<div style={styles.container}>
				<div style={Themes.styleContent}>
					<Table columns={columns} dataSource={data} pagination={{pageSize: 10}}/>
				</div>
			</div>
		);
	}

}

const styles = {
	container: {},
};

export default UserManagerPage;
