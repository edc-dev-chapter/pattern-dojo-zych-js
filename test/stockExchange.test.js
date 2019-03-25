const expect = require('chai').expect;
const StockExchange = require('../src/stockExchange');

describe('StockExchangeTest', () => {
    it('smokeTest', () => {
        const stockExchange = new StockExchange();
        expect(stockExchange).not.undefined;
    })
});