const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

let items = [];

app.get('/', (req, res) => {
  res.render('index', { items: items });
});

app.post('/', (req, res) => {
  let newItem = req.body.newItem;
  items.push(newItem);
  res.redirect('/');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

