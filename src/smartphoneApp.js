const Subscriber = require('./interfaces/subscriber');
const Utils = require('../utils/utils');

class SmartphoneApp extends Subscriber {
    update(a, b) {
        this.buzzPhone();
    };

    buzzPhone() {
        Utils.display.show("Phone is buzzing because there is new data from Stock Exchange!");
    }
}

module.exports = SmartphoneApp;