'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const vendedores = [
      {
        nome: "Carlos Silva",
        cpf: "123.456.789-01",
        email: "carlos.silva@example.com",
        telefone: "(71) 91234-5678",
        matricula: "M001",
        data_admissao: new Date("2020-03-15"),
        status: "ativo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Mariana Souza",
        cpf: "234.567.890-12",
        email: "mariana.souza@example.com",
        telefone: "(71) 92345-6789",
        matricula: "M002",
        data_admissao: new Date("2019-08-10"),
        status: "ativo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "João Pereira",
        cpf: "345.678.901-23",
        email: "joao.pereira@example.com",
        telefone: "(71) 93456-7890",
        matricula: "M003",
        data_admissao: new Date("2021-01-20"),
        status: "ativo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Fernanda Lima",
        cpf: "456.789.012-34",
        email: "fernanda.lima@example.com",
        telefone: "(71) 94567-8901",
        matricula: "M004",
        data_admissao: new Date("2018-11-05"),
        status: "ativo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Lucas Almeida",
        cpf: "567.890.123-45",
        email: "lucas.almeida@example.com",
        telefone: "(71) 95678-9012",
        matricula: "M005",
        data_admissao: new Date("2022-06-15"),
        status: "ativo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Patrícia Santos",
        cpf: "678.901.234-56",
        email: "patricia.santos@example.com",
        telefone: "(71) 96789-0123",
        matricula: "M006",
        data_admissao: new Date("2017-09-30"),
        status: "ativo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Rafael Costa",
        cpf: "789.012.345-67",
        email: "rafael.costa@example.com",
        telefone: "(71) 97890-1234",
        matricula: "M007",
        data_admissao: new Date("2019-12-12"),
        status: "ativo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Aline Ferreira",
        cpf: "890.123.456-78",
        email: "aline.ferreira@example.com",
        telefone: "(71) 98901-2345",
        matricula: "M008",
        data_admissao: new Date("2020-04-22"),
        status: "ativo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Pedro Gonçalves",
        cpf: "901.234.567-89",
        email: "pedro.goncalves@example.com",
        telefone: "(71) 99012-3456",
        matricula: "M009",
        data_admissao: new Date("2016-07-08"),
        status: "ativo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Juliana Ribeiro",
        cpf: "012.345.678-90",
        email: "juliana.ribeiro@example.com",
        telefone: "(71) 90123-4567",
        matricula: "M010",
        data_admissao: new Date("2021-10-10"),
        status: "ativo",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    // Busca CPFs já existentes para evitar duplicação
    const existing = await queryInterface.sequelize.query(
      `SELECT cpf FROM vendedors WHERE cpf IN (${vendedores.map(v => `'${v.cpf}'`).join(',')})`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    const existingCpfs = existing.map(v => v.cpf);

    const novosVendedores = vendedores.filter(v => !existingCpfs.includes(v.cpf));

    if (novosVendedores.length > 0) {
      await queryInterface.bulkInsert('vendedors', novosVendedores, {});
    } else {
      console.log('Todos os vendedores já existem. Nenhuma inserção realizada.');
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('vendedors', null, {});
  }
};
