var calc=require('../pages/CalcPage.js');
describe('test calculator operation',function(){
    beforeAll(function(){
        browser.get(browser.params.baseUrl);
    });

    it('test addition functionality of calculator',function(){
        calc.enterNumberInFirstBox(5);
        browser.sleep(2000);
        calc.enterNumberInSecondBox(6);
        browser.sleep(2000);
        calc.selectOperator('-');
        browser.sleep(4000);
       // calc.clickOnGo();
    });
    
});