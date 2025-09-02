const { faker } = require('@faker-js/faker');

class BaseTestCase {
    constructor() {
        this.faker = faker;
    }
}

module.exports = BaseTestCase;
