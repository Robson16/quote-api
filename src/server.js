const express = require('express');
const quoteRouter = require('./routes/quotes');

const PORT = process.env.PORT || 4001;

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use('/api/quotes', quoteRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});