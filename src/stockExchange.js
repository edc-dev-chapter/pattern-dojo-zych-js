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
    notifySubscribers() {
        this.subscribers.forEach(s => s.update(this.exchangeRates, this.indices));
    };

    setExchangeRates(exchangeRates) {
        this.exchangeRates = exchangeRates;
        this.notifySubscribers();
    };

    setIndices(indices) {
        this.indices = indices;
        this.notifySubscribers();
    };

    updateExchangeRate(company, rate) {
        this.exchangeRates[company] = rate;
        this.notifySubscribers();
    };

    updateIndex(indexName, rate) {
        this.indices[indexName] = rate;
        this.notifySubscribers();
    };
}

module.exports = StockExchange;