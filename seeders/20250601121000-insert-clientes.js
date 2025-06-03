'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const clientes = [
      {
        nome: "Ana Clara Souza",
        email: "ana.clara@example.com",
        telefone: "(71) 91234-5678",
        endereco: "Rua das Acácias, 123 - Salvador/BA",
        cpf: "123.456.789-01",
      },
      {
        nome: "Bruno Henrique Lima",
        email: "bruno.lima@example.com",
        telefone: "(11) 99876-5432",
        endereco: "Av. Paulista, 1000 - São Paulo/SP",
        cpf: "234.567.890-12",
      },
      {
        nome: "Camila Rocha",
        email: "camila.rocha@example.com",
        telefone: "(21) 98521-3344",
        endereco: "Rua do Catete, 45 - Rio de Janeiro/RJ",
        cpf: "345.678.901-23",
      },
      {
        nome: "Diego Martins",
        email: "diego.martins@example.com",
        telefone: "(31) 98745-3210",
        endereco: "Rua Timbiras, 500 - Belo Horizonte/MG",
        cpf: "456.789.012-34",
      },
      {
        nome: "Eduarda Silva",
        email: "eduarda.silva@example.com",
        telefone: "(61) 99888-1122",
        endereco: "SQN 210, Bloco A - Brasília/DF",
        cpf: "567.890.123-45",
      },
      {
        nome: "Fábio Almeida",
        email: "fabio.almeida@example.com",
        telefone: "(81) 91222-3344",
        endereco: "Rua do Sol, 321 - Recife/PE",
        cpf: "678.901.234-56",
      },
      {
        nome: "Gabriela Costa",
        email: "gabriela.costa@example.com",
        telefone: "(85) 99123-4567",
        endereco: "Av. Beira Mar, 200 - Fortaleza/CE",
        cpf: "789.012.345-67",
      },
      {
        nome: "Henrique Souza",
        email: "henrique.souza@example.com",
        telefone: "(41) 99345-6789",
        endereco: "Rua XV de Novembro, 123 - Curitiba/PR",
        cpf: "890.123.456-78",
      },
      {
        nome: "Isabela Ferreira",
        email: "isabela.ferreira@example.com",
        telefone: "(95) 99456-7890",
        endereco: "Av. Ville Roy, 45 - Boa Vista/RR",
        cpf: "901.234.567-89",
      },
      {
        nome: "João Pedro Menezes",
        email: "joao.pedro@example.com",
        telefone: "(27) 99876-1234",
        endereco: "Rua das Palmeiras, 87 - Vitória/ES",
        cpf: "012.345.678-90",
      }
    ];

    const timestamp = new Date();
    for (const cliente of clientes) {
      cliente.createdAt = timestamp;
      cliente.updatedAt = timestamp;

      // Verifica se já existe cliente com mesmo CPF ou email
      const existing = await queryInterface.sequelize.query(
        `SELECT id FROM \`Clientes\` WHERE cpf = ? OR email = ? LIMIT 1`,
        {
          replacements: [cliente.cpf, cliente.email],
          type: Sequelize.QueryTypes.SELECT,
        }
      );

      if (existing.length === 0) {
        await queryInterface.bulkInsert('Clientes', [cliente], {});
      }
    }
  },

  async down(queryInterface, Sequelize) {
    const cpfs = [
      "123.456.789-01", "234.567.890-12", "345.678.901-23", "456.789.012-34",
      "567.890.123-45", "678.901.234-56", "789.012.345-67", "890.123.456-78",
      "901.234.567-89", "012.345.678-90"
    ];

    const emails = [
      "ana.clara@example.com", "bruno.lima@example.com", "camila.rocha@example.com", "diego.martins@example.com",
      "eduarda.silva@example.com", "fabio.almeida@example.com", "gabriela.costa@example.com", "henrique.souza@example.com",
      "isabela.ferreira@example.com", "joao.pedro@example.com"
    ];

    await queryInterface.bulkDelete('Clientes', {
      [Sequelize.Op.or]: [
        { cpf: cpfs },
        { email: emails }
      ]
    }, {});
  }
};
