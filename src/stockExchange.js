const Subject = require('./interfaces/subject');

class StockExchange extends Subject {
    constructor() {
        super();
        this.exchangeRates = {};
        this.indices = {};
        this.subscribers = [];
    }

    addSubscriber(subscriber) {
        this.subscribers.push(subscriber);
    };
    removeSubscriber(subscriber) {
        this.subscribers = this.subscribers.filter(item => item !== subscriber);
    };
    notifySubscribers() {};

    setExchangeRates(exchangeRates) {
        this.exchangeRates = exchangeRates;
    };

    setIndices(indices) {
        this.indices = indices;
    };

    updateExchangeRate(company, rate) {
        this.exchangeRates[company] = rate;
    };

    updateIndex(indexName, rate) {
        this.indices[indexName] = rate;
    };
}

module.exports = StockExchange;