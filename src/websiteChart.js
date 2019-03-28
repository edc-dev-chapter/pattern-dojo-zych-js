const Subscriber = require('./interfaces/subscriber');
const Utils = require('../utils/utils');

class WebsiteChart extends Subscriber {
    update(exchangeRates, indices) {
        this.displayCharts(indices);
    };

    displayCharts(indices) {
        Object.keys(indices).forEach(key => {
            Utils.display.show(`Updating chart of index ${key} with value ${indices[key]}`);
        });
    }
}

module.exports = WebsiteChart;