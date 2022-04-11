const getFlagValue = require('./flags');

console.log(`Salve ${getFlagValue('--name')}, ${getFlagValue('--greeting')}`);