import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
	const { user } = useContext(Context);

	return (
		<Navbar bg="dark" data-bs-theme="dark">
			<Container>
				<NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
					АЛЕ
				</NavLink>
				{user.isAuth ? (
					<Nav className="ml-auto">
						<Button variant={'outline-light'}>Админ панель</Button>
						<Button variant={'outline-light'} className="ms-3">
							Выйти
						</Button>
					</Nav>
				) : (
					<Nav className="ml-auto">
						<Button
							variant="outline-light"
							onClick={() => user.setIsAuth(true)}>
							Авторизация
						</Button>
					</Nav>
				)}
			</Container>
		</Navbar>
	);
});

export default NavBar;