import React, { useContext } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { Card, Row } from 'react-bootstrap';

const BrandBar = observer(() => {
	const { device } = useContext(Context);

	return (
		<Row className="d-flex">
			{device.brands.map((brand) => {
				return (
					<Card
						style={{ cursor: 'pointer', width: '10%', margin: '10px 10px 0 0' }}
						key={brand.id}
						className="p-3"
						border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
						onClick={() => device.setSelectedBrand(brand)}>
						{brand.name}
					</Card>
				);
			})}
		</Row>
	);
});

export default BrandBar;
