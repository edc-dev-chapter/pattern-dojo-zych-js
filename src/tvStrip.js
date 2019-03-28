const Subscriber = require('./interfaces/subscriber');
const Utils = require('../utils/utils');

class TvStrip extends Subscriber {
    update(exchangeRates, indices) {
        this.displayStripOnTv(exchangeRates);
    };

    displayStripOnTv(exchangeRates) {
        Object.keys(exchangeRates).forEach(key => {
            Utils.display.show(`| ${key}: ${exchangeRates[key]} | `);
        });
    }
}

module.exports = TvStrip;