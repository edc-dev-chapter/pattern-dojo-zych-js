const expect = require('chai').expect;
const sinon = require('sinon');
const Utils = require('../utils/utils');

const Subject = require('../src/interfaces/subject');
const Subscriber = require('../src/interfaces/subscriber');
const StockExchange = require('../src/stockExchange');
const SmartphoneApp = require('../src/smartphoneApp');
const TvStrip = require('../src/tvStrip');
const WebsiteChart = require('../src/websiteChart');

describe('Tests', () => {
    let indices;
    let rates;

    before(() => {
        rates = {
            ZychoCorp: 1000.234,
            SolInvictus: 43.4432,
            EDC: 34.4342
        };
        indices = {
            WIG20: 20.,
            wig30: 13.43,
            RESPECT: 43.
        };
    })

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

    it('stockExchangeShouldNotifyAllSubscribers', () => {
        const stockExchange = new StockExchange();

        const smartphoneApp = new SmartphoneApp();
        sinon.spy(smartphoneApp,'update');
        const tvStrip = new TvStrip();
        sinon.spy(tvStrip,'update');   
        const websiteChart = new WebsiteChart();    
        sinon.spy(websiteChart,'update');

        stockExchange.addSubscriber(smartphoneApp);
        stockExchange.addSubscriber(tvStrip);
        stockExchange.addSubscriber(websiteChart);

        stockExchange.notifySubscribers();

        expect(smartphoneApp.update.called).to.be.true;
        expect(tvStrip.update.called).to.be.true;
        expect(websiteChart.update.called).to.be.true;
    })

    it('stockExchangeShouldNotifyAllSubscribersWhenExchangeRatesChanged', () => {
        const stockExchange = new StockExchange();

        const smartphoneApp = new SmartphoneApp();
        sinon.spy(smartphoneApp,'update');
        const tvStrip = new TvStrip();
        sinon.spy(tvStrip,'update');   
        const websiteChart = new WebsiteChart();    
        sinon.spy(websiteChart,'update');

        stockExchange.addSubscriber(smartphoneApp);
        stockExchange.addSubscriber(tvStrip);
        stockExchange.addSubscriber(websiteChart);

        stockExchange.setExchangeRates(rates);

        expect(smartphoneApp.update.calledWith(rates)).to.be.true;
        expect(tvStrip.update.calledWith(rates)).to.be.true;
        expect(websiteChart.update.calledWith(rates)).to.be.true;
    })

    it('stockExchangeShouldNotifyAllSubscribersWhenIndicesChanged', () => {
        const stockExchange = new StockExchange();

        const smartphoneApp = new SmartphoneApp();
        sinon.spy(smartphoneApp,'update');
        const tvStrip = new TvStrip();
        sinon.spy(tvStrip,'update');   
        const websiteChart = new WebsiteChart();    
        sinon.spy(websiteChart,'update');

        stockExchange.addSubscriber(smartphoneApp);
        stockExchange.addSubscriber(tvStrip);
        stockExchange.addSubscriber(websiteChart);

        stockExchange.setIndices(indices);

        expect(smartphoneApp.update.calledWith({},indices)).to.be.true;
        expect(tvStrip.update.calledWith({},indices)).to.be.true;
        expect(websiteChart.update.calledWith({},indices)).to.be.true;
    })

    it('stockExchangeShouldNotifyAllSubscribersWhenIndicesUpdated', () => {
        const stockExchange = new StockExchange();
        stockExchange.setIndices(indices);

        const smartphoneApp = new SmartphoneApp();
        sinon.spy(smartphoneApp,'update');
        const tvStrip = new TvStrip();
        sinon.spy(tvStrip,'update');   
        const websiteChart = new WebsiteChart();    
        sinon.spy(websiteChart,'update');

        stockExchange.addSubscriber(smartphoneApp);
        stockExchange.addSubscriber(tvStrip);
        stockExchange.addSubscriber(websiteChart);

        stockExchange.updateIndex("CoolnessIndex" , 123.333);

        expect(smartphoneApp.update.calledWith({},indices)).to.be.true;
        expect(tvStrip.update.calledWith({},indices)).to.be.true;
        expect(websiteChart.update.calledWith({},indices)).to.be.true;
    })

    it('stockExchangeShouldNotifyAllSubscribersWhenRatesUpdated', () => {
        const stockExchange = new StockExchange();
        stockExchange.setExchangeRates(rates);

        const smartphoneApp = new SmartphoneApp();
        sinon.spy(smartphoneApp,'update');
        const tvStrip = new TvStrip();
        sinon.spy(tvStrip,'update');   
        const websiteChart = new WebsiteChart();    
        sinon.spy(websiteChart,'update');

        stockExchange.addSubscriber(smartphoneApp);
        stockExchange.addSubscriber(tvStrip);
        stockExchange.addSubscriber(websiteChart);

        stockExchange.updateExchangeRate("CoolCorp" , 123.333);

        expect(smartphoneApp.update.calledWith(rates)).to.be.true;
        expect(tvStrip.update.calledWith(rates)).to.be.true;
        expect(websiteChart.update.calledWith(rates)).to.be.true;
    })
});