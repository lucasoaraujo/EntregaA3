const VendedorRepository = require('../repositories/VendedorRepository');

class VendedorController {

    // Listar todos os vendedores
    async index(req, res) {
        try {
            const vendedores = await VendedorRepository.findAll();
            res.json(vendedores);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Mostrar um vendedor específico
    async show(req, res) {
        const id = req.params.id;
        try {
            const vendedor = await VendedorRepository.findById(id);
            if (vendedor) {
                res.json(vendedor);
            } else {
                res.status(404).json({ error: 'Vendedor não encontrado.' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Criar um novo vendedor
    async create(req, res) {
        const { nome, cpf, email, telefone, matricula, data_admissao, status } = req.body;

        // Validação dos campos obrigatórios
        if (!nome || !cpf || !email || !telefone || !data_admissao) {
            return res.status(400).json({ error: "Campos nome, cpf, email, telefone e data_admissao são obrigatórios" });
        }

        try {
            const vendedor = await VendedorRepository.create({
                nome,
                cpf,
                email,
                telefone,
                matricula,
                data_admissao,
                status: status || 'ativo'
            });
            res.status(201).json(vendedor);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Atualizar um vendedor existente
    async update(req, res) {
        const id = req.params.id;
        const { nome, cpf, email, telefone, matricula, data_admissao, status } = req.body;

        try {
            const vendedor = await VendedorRepository.update(id, {
                nome,
                cpf,
                email,
                telefone,
                matricula,
                data_admissao,
                status
            });

            if (!vendedor) {
                return res.status(404).json({ error: "Vendedor não encontrado" });
            }

            res.json({ message: "Vendedor editado com sucesso.", vendedor });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Deletar um vendedor
    async delete(req, res) {
        const id = req.params.id;
        try {
            const success = await VendedorRepository.delete(id);

            if (!success) {
                return res.status(404).json({ error: "Vendedor não encontrado." });
            }

            res.json({ message: "Vendedor removido com sucesso." });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new VendedorController();
