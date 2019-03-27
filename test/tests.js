const expect = require('chai').expect;
<<<<<<< HEAD
const Utils = require('../utils/utils');
=======
const implements = require('../utils/utils');
>>>>>>> Add interfaces and tests

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
});