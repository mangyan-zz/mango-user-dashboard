import React, { PureComponent } from 'react';
import { connect, MangoUtils } from 'mango-web';
import { Button, Form, Input, Modal } from 'antd';
import Strings from '../../../Strings';
import AppStrings from '../../../../../assets/AppStrings';
import ModuleCode from '../../../ModuleCode';

@connect(({userManager}) => ({userManager}))
@Form.create()
class AddUserFragment extends PureComponent {

	constructor(props) {
		super(props);
		this.data = {};
	}

	render() {

		const {showAddUserModal} = this.props.userManager;
		const {form} = this.props;
		return (
			<Modal
				destroyOnClose
				title={Strings.addUser}
				onCancel={() => {
					MangoUtils.dispatch(this, ModuleCode.userManager, 'pureShowAddUserModal');
				}}
				visible={showAddUserModal}
				footer={[
					<Button
						key="back"
						onClick={() => {
							MangoUtils.dispatch(this, ModuleCode.userManager, 'pureShowAddUserModal');
						}}
					>
						{AppStrings.cancel}
					</Button>,
					<Button
						key="submit"
						type="primary"
						onClick={() => {
							form.validateFields((err, values) => {
								if (!err) {
									MangoUtils.dispatch(this, ModuleCode.userManager, 'onAddUsers', {req: values});
								}
							});
						}}
					>
						{AppStrings.confirm}
					</Button>,
				]}
			>

				{/*用户名*/}
				<Form.Item labelCol={{span: 5}} wrapperCol={{span: 15}} label={Strings.name}>
					{form.getFieldDecorator('moduleName', {
						rules: [{required: true, message: Strings.phName, min: 1, max: 10}],
					})(<Input placeholder={Strings.phName}/>)}
				</Form.Item>

				{/*用户邮箱*/}
				<Form.Item labelCol={{span: 5}} wrapperCol={{span: 15}} label={Strings.email}>
					{form.getFieldDecorator('moduleDesc', {
						rules: [{required: true, message: Strings.phEmail, min: 1, max: 200}],
					})(<Input placeholder={Strings.phEmail}/>)}
				</Form.Item>
			</Modal>
		);
	}
}

const styles = {
	container: {},
};

export default AddUserFragment;
