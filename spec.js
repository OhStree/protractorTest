// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    //browser.ignoreSynchronization=true;
    //browser.driver.get('https://automationedge.com/clients-testimony/');
   // browser.get('https://automationedge.com/clients-testimony/');
    //expect(browser.getTitle()).toEqual('Super Calculator');
    //element(by.xpath('//*[@id='menu-item-2431']/a')).click();
    // var li = element(by.xpath('//*[@id=\'menu-item-2431\']/a'));
    // expect(li.click());
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).click();
    element(by.model('first')).sendKeys('10');
  });
});