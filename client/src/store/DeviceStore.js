import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
	constructor() {
		this._types = [
			{ id: 1, name: 'Смартфоны' },
			{ id: 2, name: 'Холодильники' },
		];
		this._brands = [
			{ id: 1, name: 'Samsung' },
			{ id: 2, name: 'Apple' },
		];
		this._devices = [
			{
				id: 1,
				name: '11 Pro',
				price: '120000',
				rating: '0',
				img: '708fb1a1-0faa-4a94-aeb0-9141f96f19db.jpg',
			},
			{
				id: 2,
				name: '12 Pro',
				price: '120000',
				rating: '0',
				img: '"cd73d610-7807-4610-86e0-c186fae545d6.jpg"',
			},
		];
		makeAutoObservable(this);
	}

	setTypes(types) {
		this._types = types;
	}

	setBrands(brands) {
		this._brands = brands;
	}

	setDevices(devices) {
		this._devices = devices;
	}

	get types() {
		return this._types;
	}

	get brands() {
		return this._brands;
	}

	get devices() {
		return this._devices;
	}
}
