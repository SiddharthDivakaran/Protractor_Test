var Jasmine2HtmlReporter=require('protractor-jasmine2-html-reporter');
var HtmlReporter=require('protractor-beautiful-reporter');
var today=new Date();
timestmp=today.getMonth()+1+'-'+today.getDate()+'-'+today.getFullYear()+'-'+today.getHours()+'h-'+today.getMinutes()+'m-'+today.getSeconds()+'s';


exports.config={

    framework:'jasmine',
    //seleniumAddress:"http://loaclhost:4444/wd/hub",
    directConnect:true,
    specs:['../test/TestForAddition.js'],
    capabilities:{
        'browserName':'chrome'
    },
    params:{
        baseUrl:"http://www.way2automation.com/angularjs-protractor/calc/"
    },
    suites:{
       operations:['../test/TestForAddition.js',]
    },
    exclude:[],
    suite:"operations",
    jasmineNodeOpts:{
        showColors:"true",
        onComplete:null,
        isVerbose:true,
        includeStackTrace:true,
        defaultTimeoutInterval:15000,
        displayStacktrace:'all'
    },
    onPrepare:function()
    {
        browser.manage().window().maximize();
        var baseDir="../Report/report-"+timestmp;
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory:baseDir,
            screenshotSubfolder:'images',
            docTitle:'Test Report',
            docName:'test-report.html',
            takeScreenshotForSkippedSpecs:true,
            takeScreenshotOnlyFaorFailedSpecs:true,
            gatherBrowserLogs:true,
                    }).getJasmine2Reporter());
    }

}