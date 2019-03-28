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
}

module.exports = StockExchange;