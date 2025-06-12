const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Configuração do banco de dados
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5433,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'trabalho_volo'
});

app.use(cors());
app.use(express.json());

// Criar tabela de tarefas
pool.query(`
  CREATE TABLE IF NOT EXISTS tarefas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descricao TEXT,
    concluida BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`);

// Rotas CRUD
app.get('/tarefas', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tarefas ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/tarefas', async (req, res) => {
  const { titulo, descricao } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO tarefas (titulo, descricao) VALUES ($1, $2) RETURNING *',
      [titulo, descricao]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/tarefas/:id', async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, concluida } = req.body;
  try {
    const result = await pool.query(
      'UPDATE tarefas SET titulo = $1, descricao = $2, concluida = $3 WHERE id = $4 RETURNING *',
      [titulo, descricao, concluida, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/tarefas/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM tarefas WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    res.json({ message: 'Tarefa removida com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
}); 