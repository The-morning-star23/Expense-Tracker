const express = require('express');
const pool = require('../db/dbConfig.js');
const router = express.Router();

// Add Expense
router.post('/add-expense', async (req, res) => {
    const { userId, title, amount, category, date } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO expenses (user_id, title, amount, category, date) VALUES (?, ?, ?, ?, ?)',
            [userId, title, amount, category, date]
        );
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get All Expenses
router.get('/expenses/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        const [rows] = await pool.query('SELECT * FROM expenses WHERE user_id = ?', [userId]);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
