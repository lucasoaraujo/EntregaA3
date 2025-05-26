const { Vendedor } = require('../models');

class VendedorRepository {
    async findAll() {
        return await Vendedor.findAll();
    }

    async findById(id) {
        return await Vendedor.findByPk(id);
    }

    async create(data) {
        return await Vendedor.create(data);
    }

    async update(id, data) {
        const vendedor = await Vendedor.findByPk(id);
        if (vendedor) {
            await vendedor.update(data);
        }
        return vendedor;
    }

    async delete(id) {
        const vendedor = await Vendedor.findByPk(id);
        if (vendedor) {
            await vendedor.destroy();
        }
        return vendedor;
    }
}

module.exports = new VendedorRepository();
