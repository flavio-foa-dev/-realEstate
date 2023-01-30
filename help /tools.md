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

