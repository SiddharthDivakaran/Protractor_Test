var Selector=function(selector){
    this.webElement=element(selector);
};
Selector.prototype.getOptions=function(){
    return this.webElement.all(by.tagName('option'));
};
Selector.prototype.getSelectedOptions=function(){
    return this.webElement.all(by.css('option[selected="selected"]'));
};
Selector.prototype.selectByValue=function(value){
    return this.webElement.all(by.css('option[value="'+value+'"]')).click();
};
Selector.prototype.selectByPartialText=function(text){
    return this.webElement.all(by.cssContainingText('option',text)).click();
};
Selector.prototype.selectByText=function(text){
   return this.webElement.all(by.xpath('option[.="'+text+'"]')).click();
};
module.exports=Selector;
