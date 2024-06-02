
import { Form, Input, Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();


    const onFinish = (values: unknown) => {
        console.log(values);
        navigate('/');
    };

    const onFinishFailed = (errorInfo: unknown) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <Card className="w-96">

                    <Form
                        name="register"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="w-full">
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                    <Link to='/login'>Back to Login</Link>
                </Card>
            </div>
        </div>
    );
};

export default Register;
