const express = require('express');
const app = express();
const port = 5000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

require('dotenv').config();

// Require route modules
const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');
const apiRouter = require('./routes/api');

// Use routes
app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});