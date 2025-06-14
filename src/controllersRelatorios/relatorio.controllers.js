const mysql = require('mysql2/promise');
require('dotenv').config();

async function produtosMaisVendidos(req, res) {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
  });

  try {
    const sql = `
      SELECT 
        p.id AS produto_id,
        p.nome AS produto_nome,
        SUM(vp.quantidade) AS total_vendido
      FROM vendaProdutos vp
      JOIN Produtos p ON p.id = vp.produtoId
      GROUP BY p.id, p.nome
      ORDER BY total_vendido DESC
    `;

    const [rows] = await connection.execute(sql);
    res.json(rows);
  } catch (error) {
    console.error('Erro ao gerar relatório produtos mais vendidos:', error);
    res.status(500).json({ erro: 'Erro ao gerar relatório produtos mais vendidos' });
  } finally {
    await connection.end();
  }
}

async function produtosPorCliente(req, res) {
  const clienteId = req.params.clienteId;

  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
  });

  try {
    let sql = `
      SELECT
        c.id AS cliente_id,
        c.nome AS cliente_nome,
        p.id AS produto_id,
        p.nome AS produto_nome,
        SUM(vp.quantidade) AS quantidade_comprada
      FROM clientes c
      JOIN vendas v ON v.clienteId = c.id
      JOIN vendaProdutos vp ON vp.vendaId = v.id
      JOIN produtos p ON p.id = vp.produtoId
    `;

    const params = [];

    if (clienteId) {
      sql += ` WHERE c.id = ? `;
      params.push(clienteId);
    }

    sql += `
      GROUP BY c.id, c.nome, p.id, p.nome
      ORDER BY c.nome, quantidade_comprada DESC
    `;

    const [rows] = await connection.execute(sql, params);
    res.json(rows);

  } catch (error) {
    console.error('Erro ao gerar relatório produtos por cliente:', error);
    res.status(500).json({ erro: 'Erro ao gerar relatório produtos por cliente' });
  } finally {
    await connection.end();
  }
}

async function consumoMedioCliente(req, res) {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
  });

  try {
    const sql = `
      SELECT
        c.id AS cliente_id,
        c.nome AS cliente_nome,
        ROUND(AVG(IFNULL(total_quantidade, 0))) AS consumo_medio
      FROM clientes c
      LEFT JOIN (
        SELECT
          v.clienteId,
          vp.produtoId,
          SUM(vp.quantidade) AS total_quantidade
        FROM vendas v
        JOIN vendaProdutos vp ON vp.vendaId = v.id
        GROUP BY v.clienteId, vp.produtoId
      ) AS vendas_por_produto ON vendas_por_produto.clienteId = c.id
      GROUP BY c.id, c.nome
      ORDER BY c.nome;
    `;

    const [rows] = await connection.execute(sql);
    res.json(rows);

  } catch (error) {
    console.error('Erro ao gerar relatório consumo médio do cliente:', error);
    res.status(500).json({ erro: 'Erro ao gerar relatório consumo médio do cliente' });
  } finally {
    await connection.end();
  }
}

async function produtosBaixoEstoque(req, res) {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
  });

  try {
    const sql = `
      SELECT 
        id AS produto_id,
        nome AS produto_nome,
        quantidadeEstoque
      FROM produtos
      ORDER BY quantidadeEstoque ASC, nome
      LIMIT 5;
    `;

    const [rows] = await connection.execute(sql);
    res.json(rows);

  } catch (error) {
    console.error('Erro ao gerar relatório de produtos com baixo estoque:', error);
    res.status(500).json({ erro: 'Erro ao gerar relatório de produtos com baixo estoque' });
  } finally {
    await connection.end();
  }
}

module.exports = {
  produtosMaisVendidos,
  produtosPorCliente,
  consumoMedioCliente,
  produtosBaixoEstoque
};

// Mantém o container rodando
setInterval(() => {}, 1 << 30);
