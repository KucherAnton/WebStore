import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
	constructor() {
		this._types = [
			{ id: 1, name: 'Смартфоны' },
			{ id: 2, name: 'Холодильники' },
			{ id: 3, name: 'Ноутбуки' },
			{ id: 4, name: 'Телевизоры' },
		];
		this._brands = [
			{ id: 1, name: 'Samsung' },
			{ id: 2, name: 'Apple' },
			{ id: 3, name: 'Lenovo' },
			{ id: 4, name: 'Xiaomi' },
		];
		this._devices = [
			{
				id: 1,
				name: '11 Pro',
				price: '120000',
				rating: '0',
				img: 'https://img.freepik.com/free-photo/adorable-looking-kitten-with-yarn_23-2150886292.jpg',
			},
			{
				id: 2,
				name: '12 Pro',
				price: '120000',
				rating: '0',
				img: 'https://img.freepik.com/free-photo/adorable-looking-kitten-with-yarn_23-2150886292.jpg',
			},
			{
				id: 2,
				name: '12 Pro',
				price: '120000',
				rating: '0',
				img: 'https://img.freepik.com/free-photo/adorable-looking-kitten-with-yarn_23-2150886292.jpg',
			},
			{
				id: 2,
				name: '12 Pro',
				price: '120000',
				rating: '0',
				img: 'https://img.freepik.com/free-photo/adorable-looking-kitten-with-yarn_23-2150886292.jpg',
			},
			{
				id: 2,
				name: '12 Pro',
				price: '120000',
				rating: '0',
				img: 'https://img.freepik.com/free-photo/adorable-looking-kitten-with-yarn_23-2150886292.jpg',
			},
		];

		this._selectedType = {};
		this._selectedBrand = {};
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

	setSelectedType(type) {
		this._selectedType = type;
	}

	setSelectedBrand(brand) {
		this._selectedBrand = brand;
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

	get selectedType() {
		return this._selectedType;
	}

	get selectedBrand() {
		return this._selectedBrand;
	}
}
