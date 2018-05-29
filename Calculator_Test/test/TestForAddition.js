var calc=require('../pages/CalcPage.js');
describe('test calculator operation',function(){
    beforeAll(function(){
        browser.get(browser.params.baseUrl);
    });

    it('test addition functionality of calculator',function(){
        calc.enterNumberInFirstBox(5);
        calc.enterNumberInSecondBox(6);
        calc.selectOperator('+');
        calc.clickOnGo();
    });
    
});