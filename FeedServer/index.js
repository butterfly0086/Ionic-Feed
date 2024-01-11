const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const port = 3000;

// Set up PostgreSQL connection
const pool = new Pool({
  // PostgreSQL connection config
  user: 'postgres',
  host: 'localhost',
  database: 'feed',
  password: 'happy',
  port: '5432',
});

app.use(cors());

// API endpoint to get project data by ID
app.get('/api/projects/:id', async (req, res) => {
  try {
    const projectId = req.params.id;

    const query = 'SELECT Name FROM Project WHERE ProjectID = $1';
    const values = [projectId];

    pool.query(query, values).then((info) => {
      console.log(info);
    }).catch((err) => console.log(err));
    
    const result = await pool.query(query, values);
    
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
