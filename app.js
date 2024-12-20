const express = require('express');
const app = express();
const port = 5000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Require route modules
const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');

// Use routes
app.use('/', indexRouter);
app.use('/admin', adminRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});