const app = require('./src/serverConfig.js');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('listening on port ' + port));
