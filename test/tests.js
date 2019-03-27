const expect = require('chai').expect;
const Utils = require('../utils/utils');

const Subject = require('../src/interfaces/subject');
const Subscriber = require('../src/interfaces/subscriber');
const StockExchange = require('../src/stockExchange');
const SmartphoneApp = require('../src/smartphoneApp');
const TvStrip = require('../src/tvStrip');
const WebsiteChart = require('../src/websiteChart');

describe('Tests', () => {
    it('classSmartphoneAppImplementsSubscriber', () => {
        expect(Utils.implements(SmartphoneApp, Subscriber)).to.be.true;
    })

    it('classTvStripImplementsSubscriber', () => {
        expect(Utils.implements(TvStrip, Subscriber)).to.be.true;
    })

    it('classWebsiteChartImplementsSubscriber', () => {
        expect(Utils.implements(WebsiteChart, Subscriber)).to.be.true;
    })

    it('classStockExchangeImplementsSubject', () => {
        expect(Utils.implements(StockExchange, Subject)).to.be.true;
    })

    it('stockExchangeAcceptsNewSubscribers', () => {
        const stockExchange = new StockExchange();
        stockExchange.addSubscriber((a, b) => {});
        expect(stockExchange.subscribers.length).to.be.equal(1);
    })

    it('stockExchangeShouldRemoveExistingSubscribers', () => {
        const stockExchange = new StockExchange();
        stockExchange.addSubscriber((a, b) => {});
        stockExchange.removeSubscriber(stockExchange.subscribers[0]);
        expect(stockExchange.subscribers.length).to.be.equal(0);
    })

    it('stockExchangeShouldNotRemoveSubscriberIfNotSubscribed', () => {
        const stockExchange = new StockExchange();
        const sub = (a, b) => {};
        stockExchange.addSubscriber((a, b) => {});
        stockExchange.addSubscriber(sub);
        stockExchange.removeSubscriber((a, b) => {});
        stockExchange.removeSubscriber(sub);
        expect(stockExchange.subscribers.length).to.be.equal(1);
    })
});