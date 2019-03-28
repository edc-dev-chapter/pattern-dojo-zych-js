# Observer Pattern Dojo
Based on Java repository.. https://github.com/edc-dev-chapter/patterns-dojo-zych

### Description
We have a Stock Exchange market that is represented by class StockExchange.
This StockExchange class have information about many share prices and stock market indices.
You shouldn't be worried about how this class gets information - this is delivered by third party. 
Your job in this kata is to implement three classes that represent displaying data from stock market 
in three different channels: **Tv Strip**, **Smartphone App**, **Website with chart**. This channels
have to react to changes in Stock Exchange and display fetched information in different ways. Also,
any other channel that will appear has to have possibility to get data from Stock Market without any 
changes to existing channels or Stock Market class.   
 

### Requirements
 * node 8+


### How To start
This branch is just a starting point. To go to first step - checkout branch `observer-step1` and 
follow instructions in updated Readme.

### Step1
Run tests found in test/tests.js. Tests will fail. 
Your job is to make tests pass. You cannot change implementation of tests, but you have to change
implementation of existing classes. In this step implement correct interfaces in classes
* StockExchange
* SmartphoneApp
* TvStrip
* WebsiteChart

If your tests are passing, go ahead and checkout `observer-step2` branch and read Readme document.

### Step2
Tests are failing again. You have to use your knowledge about **observer pattern**
to implement required behaviour. Class StockExchange has now a collection that can keep information about all 
channels that are subscribed to receive its state changes. Your job is to implement methods that will 
allow subscribers to add themselves to this subscribers list as well as add possibility to get him out of it.

If your tests are passing, go ahead and checkout `observer-step3` branch and read Readme document.
