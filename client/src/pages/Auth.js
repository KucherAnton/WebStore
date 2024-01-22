import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { registration } from '../http/userApi';
import { login } from '../http/userApi.js';
import { observer } from 'mobx-react-lite';
import { Context } from '../index.js';

const Auth = observer(() => {
	const { user } = useContext(Context);
	const location = useLocation();
	const isLogin = location.pathname === LOGIN_ROUTE;
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigation = useNavigate();

	const click = async () => {
		try {
			let data;
			if (isLogin) {
				const data = await login(email, password);
			} else {
				const data = await registration(email, password);
			}
			user.setUser(user);
			user.setIsAuth(true);
			navigation(SHOP_ROUTE);
		} catch (e) {
			alert(e.response.data.message);
		}
	};

	return (
		<Container
			className="d-flex justify-content-center align-items-center"
			style={{ height: window.innerHeight - 54 }}>
			<Card style={{ width: 600 }} className="p-5">
				<h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
				<Form className="d-flex flex-column">
					<Form.Control
						className="mt-3"
						placeholder="Введите Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Form.Control
						className="mt-3"
						placeholder="Введите пароль"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
					/>
					<Row className="d-flex justify-content-between mt-3 ps-3 pe-3 ">
						{isLogin ? (
							<div style={{ width: 300 }}>
								Нет аккаунта?{' '}
								<NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
							</div>
						) : (
							<div style={{ width: 300 }}>
								Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
							</div>
						)}
						<Button
							style={{ width: 150 }}
							variant={'outline-success'}
							onClick={click}>
							{isLogin ? 'Войти' : 'Регистрация'}
						</Button>
					</Row>
				</Form>
			</Card>
		</Container>
	);
});

export default Auth;
