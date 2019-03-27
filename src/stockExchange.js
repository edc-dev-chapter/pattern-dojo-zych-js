const Subject = require('./interfaces/subject');

class StockExchange extends Subject {
    constructor() {
        super();
        this.exchangeRates = {};
        this.indices = {};
        this.subscribers = [];
    }

    addSubscriber(subscriber) {};
    removeSubscriber(subscriber) {};
    notifySubscribers() {};
}

module.exports = StockExchange;