const { Device } = require('../models/models');
const ApiError = require('../error/apiError');
const uuid = require('uuid');
const path = require('path');

class DeviceController {
	async create(req, res) {
		const { name, price, brandId, typeId, info } = req.body;
		const { img } = req.files;
		let fileName = uuid.v4() + '.jpg';
		img.mv(path.resolve(__dirname, '..', 'static', fileName));

		const device = await Device.create({
			name,
			price,
			brandId,
			typeId,
			img: fileName,
		});

		return res.json(device);
	}

	async getAll(req, res) {
		let { typeId, brandId, page, limit } = req.query;
		page = page || 1;
		limit = limit || 9;
		let offset = page * limit - limit;

		let devices;
		if (!brandId && !typeId) {
			devices = await Device.findAll({ limit, offset });
		}

		if (brandId && !typeId) {
			devices = await Device.findAll({ where: { brandId }, limit, offset });
		}

		if (!brandId && typeId) {
			devices = await Device.findAll({ where: { typeId }, limit, offset });
		}

		if (brandId && typeId) {
			devices = await Device.findAll({
				where: { brandId, typeId },
				limit,
				offset,
			});
		}

		return res.json(devices);
	}

	async getOne(req, res) {}
}

module.exports = new DeviceController();