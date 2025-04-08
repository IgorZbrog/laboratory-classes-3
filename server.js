const express = require('express');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));


app.use(express.urlencoded({ extended: true }));


const homeRouter = require('./routing/home');
const productsRouter = require('./routing/products');
const logoutRouter = require('./routing/logout');


app.use('/', homeRouter);
app.use('/products', productsRouter);
app.use('/kill', logoutRouter);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


function getFileFromAbsolutePath(absolutePath) {
  return path.join(__dirname, absolutePath);
}