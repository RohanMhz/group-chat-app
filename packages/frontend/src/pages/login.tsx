// src/pages/login.tsx
import { Form, Input, Button, Checkbox, Card, message } from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async (values: any) => {
        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const token = await response.text();
            login(token); // Update the authentication state to logged in
            navigate('/'); // Redirect to the home page
        } catch (error) {
            message.error('Login failed. Please check your username and password.');
            console.error('Login error:', error);
        }
    };

    const onFinish = async (values: any) => {
        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const token = await response.text();
            login(token); // Update the authentication state to logged in
            navigate('/'); // Redirect to the home page
        } catch (error) {
            message.error('Login failed. Please check your username and password.');
            console.error('Login error:', error);
        }
    };

    const onFinishFailed = (errorInfo: unknown) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <Card className="w-96">
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={handleLogin} // Call the handleLogin function when the form is submitted
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
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
                <Link to="/register">Don't have an account?</Link>
            </Card>
        </div>
    );
};

export default Login;
