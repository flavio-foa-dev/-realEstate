1. npm init -y
  - package.json
    - "type": "module",
2. lint
 - config
  - npm i eslint -D
  - npx eslint --init
  - rules: {
    semi: ['error', 'always']
  }
3. npm install jest -D
  - "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
  - "test:watch": "node --experimental-vm-modules node_modules/jest/bin/jest.js --watch",
  - "test:coverage": "node --experimental-vm-modules node_modules/jest/bin/jest.js --coverage"
4. express
5. dotenv
6. typescript
   - @types/node
7. msql2
8. sequelize
9.  sequelize-cli
  - npx sequelize-cli init
  - .sequelizerc
    - const path = require('path');
    module.exports = {
      'config': path.resolve('src/api/config/config.json'),
      'models-path': path.resolve('src/api/models'),
      'seeders-path': path.resolve('src/api/seeders'),
      'migrations-path': path.resolve('src/api/migrations')
    };
  - npx sequelize-cli model:create --name user --attributes <name>:string,<ative>:boolean
  - npx sequelize-cli db:migrate
  - npx sequelize-cli seed:generate --name <nome>
  - npx sequelize-cli db:seed:all
  - sequelize-cli
