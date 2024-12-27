const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const api = require('./routes/api.js');

dotenv.config({ path: './ExpenseTracker/.env' });
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/api', api);

const PORT = process.env.PORT || 3000;

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

