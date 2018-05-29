var calc=function()
{
  var firstInputBox=by.model("first");
  var secondInputBox=by.model("second");
  var GoBtn=by.id("button#gobutton");
  var options=by.xpath("//select[@class='span1 ng-pristine ng-valid ng-touched']/option");
  var selectOption=by.xpath("//select[@class='span1 ng-pristine ng-valid ng-touched']");
  var resulttable=by.xpath("//thead/following-sibling::tbody/tr");

  function rowdataResult(i)
  {
     return by.xpath("//thead/following-sibling::tbody/tr[i]/td[3]");
  }

  var select=require('../util/Selector.js');


  this.enterNumberInFirstBox=function(num)
  {
    element(firstInputBox).sendKeys(num);
    return num;
  }

  this.enterNumberInSecondBox=function(num)
  {
      element(secondInputBox).sendKeys(num);
      return num;
  }

  this.selectOperator=function(text)
  {
     var sel=new select(selectOption);
     sel.selectByText(text);
  }

  this.clickOnGo=function()
  {
      element(GoBtn).click();
  }

}
module.exports=new calc();