const environment = process.env.NODE_ENV

const development = {
    PORT: 3011,
    host: 'localhost',
    username: 'root',
    password: null,
    database: 'test_db',
    dialect: 'sqlite',
    storage: './test_db.db'
}

let config = {}

switch (process.env.NODE_ENV) {
    case 'development':
        config = development;
        break;
    default:
        init = development;
}

module.exports = config;