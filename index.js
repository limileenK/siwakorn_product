const express = require('express');
const PORT = process.env.PORT || 8080;
const restaurantRouter = require('./routes/restaurant');
const hbs = require('express-handlebars');
const routes = require('./routes/index');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.engine('hbs', hbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', restaurantRouter);
app.use('/', routes);


app.listen(
    PORT,
    () => {
        console.log(`Listening to port ${PORT}`);
    }
);