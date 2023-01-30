import app from './src/serverConfig.js';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('listening on port ' + port));
