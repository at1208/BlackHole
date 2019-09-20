const express = require('express');
const app = express();
require('./src/Routes/blackholeRoutes')(app);

const Port = process.env.PORT || 5000;
app.listen(Port, () => console.log(`Listening to the ${Port}`));
