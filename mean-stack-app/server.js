const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express API!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

