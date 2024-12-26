const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const apiRoutes = require('./routes/api');

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
