const dotenv = require('dotenv');
const app = require('./src/app');
dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('listening on port ' + port));
