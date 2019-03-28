const expect = require('chai').expect;
const sinon = require('sinon');
const Utils = require('../utils/utils');

const SmartphoneApp = require('../src/smartphoneApp');
const TvStrip = require('../src/tvStrip');
const WebsiteChart = require('../src/websiteChart');

describe('ObserversTests', () => {
    afterEach(() => {
        const spy = Utils.display.show;
        if (spy.hasOwnProperty('restore')) {
			spy.restore();
		}
    });

    it('tvStripTest', () => {
        const expectation = sinon.mock(Utils.display).expects('show').exactly(3);

        const tvStrip = new TvStrip();
        const rates = {
            ZychoCorp: 1000.234,
            SolInvictus: 43.4432,
            EDC: 34.4342
        };
        const indices = {
            WIG20: 20.,
            wig30: 13.43,
            RESPECT: 43.
        };

        tvStrip.update(rates, indices);

        expect(expectation.verify()).to.be.true;
    });

    it('smartphoneAppTest', () => {
        const expectedText = 'Phone is buzzing because there is new data from Stock Exchange!';
        const expectation = sinon.mock(Utils.display).expects('show').exactly(1).withArgs(expectedText);
        const smartphoneApp = new SmartphoneApp();
        const rates = {
            ZychoCorp: 1000.234,
            SolInvictus: 43.4432,
            EDC: 34.4342
        };
        const indices = {
            WIG20: 20.,
            wig30: 13.43,
            RESPECT: 43.
        };

        smartphoneApp.update(rates, indices);
        expect(expectation.verify()).to.be.true;
    });

    it('websiteChartTest', () => {
        const expectation = sinon.mock(Utils.display).expects('show').exactly(4);
        const websiteChart = new WebsiteChart();
        const rates = {
            ZychoCorp: 1000.234,
            SolInvictus: 43.4432,
            EDC: 34.4342
        };
        const indices = {
            WIG20: 20.,
            wig30: 13.43,
            RESPECT: 43.,
            "OTHER INDEX": 66.234
        };

        websiteChart.update(rates, indices);
        expect(expectation.verify()).to.be.true;
    });
});