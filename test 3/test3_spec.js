describe('test 3', function() {
  it('logging into the app', function() {
    browser.get('https://automation.dev.coinspectapp.com/');

    element(by.xpath('//input[@name="email"]')).sendKeys('qa_technicaltest');
    element(by.xpath('//input[@name="password"]')).sendKeys('QWERTYqwerty123!@#');
    element(by.xpath('//input[@value="Login"]')).click();
  });
  it('starting inspection', function() {    
    
    element(by.css('[ng-click="openImpromptuForm()"]')).click();

    var EC = protractor.ExpectedConditions;
    browser.wait(EC.presenceOf($('#create-inspection')), 5000);
    element(by.id('withOutUnitsDropdown')).click();
    browser.wait(EC.presenceOf($('#withOutUnitsDropdown-overlay')), 5000);
    element(by.xpath('//*[@id="withOutUnitsDropdown-overlay"]//span[contains(.,"Automation A")]')).click();
    browser.wait(EC.presenceOf($('#impromptuChecklistDropdown')), 5000);
    element(by.xpath('//*[@id="impromptuChecklistDropdown-overlay"]//span[contains(.,"Automated Color Test")]')).click();
    element(by.css('[ng-click="create()"]')).click();
  });
  it('answering question 1 randomly', function() {

    element(by.xpath('//header[@ng-click="group.expanded = !group.expanded"]')).click();
    element(by.xpath('//header[@ng-click="group.expanded = !group.expanded"]/following-sibling::ul/li[1]')).click();
    
    let list = element.all(by.xpath('//label[contains(.,"Answer")]/following-sibling::div/div'));
    var options = Math.floor((Math.random() * list.count()) + 1);
    
    element(by.xpath('//label[contains(.,"Answer")]/following-sibling::div/div['+ options.toString() +']')).click();

    var comments = ["Saab", "Volvo", "BMW","hello world", "comment 1", "new comment", "this is protractor!", "from protractor", "watching tv", "so cold", "the babysitter", "reading books"];
    var pics = ["pic-1.png", "pic-2.png", "pic-3.png", "pic-4.png", "pic-5.png", "pic-6.png"]
    var opt_comment = Math.floor((Math.random() * comments.count()) + 1);
    var opt_pic = Math.floor((Math.random() * pics.count()) + 1);
    var filepath = "/home/mycomputer/ryan/pics/";
    element(by.xpath('//textarea')).sendKeys(comments[opt_comment]);
    element(by.xpath('//input[@capture="camera" and @type="file"]')).sendKeys(filepath + pics[opt_pic]);

    var EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeSelected($('figure.i-edit')), 15000);
    element($('figure.i-edit')).click();

    browser.wait(EC.elementToBeSelected(by.model('img.comment')), 15000);
    opt_comment = Math.floor((Math.random() * comments.count()) + 1);
    element(by.model('img.comment')).sendKeys(comments[opt_comment]);

    browser.wait(EC.elementToBeSelected(by.css('ng-click="doNext()"')), 15000);
    element(by.css('ng-click="doNext()"')).click();
  });
  it('answering question 2 randomly', function() {

    var EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeSelected(by.id('ca-dropdown-0')), 15000);
    element(by.id('ca-dropdown-0')).click();

    let list = element.all(by.xpath('//*[@id="ca-dropdown-0-overlay"]/div[2]/div'));
    var options = Math.floor((Math.random() * list.count()) + 1);    
    element(by.xpath('//*[@id="ca-dropdown-0-overlay"]/div[2]/div['+ options.toString() +']')).click();

    var comments = ["Saab", "Volvo", "BMW","hello world", "comment 1", "new comment", "this is protractor!", "from protractor", "watching tv", "so cold", "the babysitter", "reading books"];
    var pics = ["pic-1.png", "pic-2.png", "pic-3.png", "pic-4.png", "pic-5.png", "pic-6.png"]
    var opt_comment = Math.floor((Math.random() * comments.count()) + 1);
    var opt_pic = Math.floor((Math.random() * pics.count()) + 1);
    var filepath = "/home/mycomputer/ryan/pics/";
    element(by.xpath('//textarea')).sendKeys(comments[opt_comment]);
    element(by.xpath('//input[@capture="camera" and @type="file"]')).sendKeys(filepath + pics[opt_pic]);

    browser.wait(EC.elementToBeSelected($('figure.i-edit')), 15000);
    element($('figure.i-edit')).click();

    browser.wait(EC.elementToBeSelected(by.model('img.comment')), 15000);
    opt_comment = Math.floor((Math.random() * comments.count()) + 1);
    element(by.model('img.comment')).sendKeys(comments[opt_comment]);

    browser.wait(EC.elementToBeSelected(by.css('ng-click="doNext()"')), 15000);
    element(by.css('ng-click="doNext()"')).click();
  });
  it('answering question 3 randomly', function() {
    
    let list = element.all(by.xpath('//label[contains(.,"Answer")]/following-sibling::div/div'));
    var options = Math.floor((Math.random() * list.count()) + 1);
    
    element(by.xpath('//label[contains(.,"Answer")]/following-sibling::div/div['+ options.toString() +']')).click();

    var comments = ["Saab", "Volvo", "BMW","hello world", "comment 1", "new comment", "this is protractor!", "from protractor", "watching tv", "so cold", "the babysitter", "reading books"];
    var pics = ["pic-1.png", "pic-2.png", "pic-3.png", "pic-4.png", "pic-5.png", "pic-6.png"]
    var opt_comment = Math.floor((Math.random() * comments.count()) + 1);
    var opt_pic = Math.floor((Math.random() * pics.count()) + 1);
    var filepath = "/home/mycomputer/ryan/pics/";
    element(by.xpath('//textarea')).sendKeys(comments[opt_comment]);
    element(by.xpath('//input[@capture="camera" and @type="file"]')).sendKeys(filepath + pics[opt_pic]);

    var EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeSelected($('figure.i-edit')), 15000);
    element($('figure.i-edit')).click();

    browser.wait(EC.elementToBeSelected(by.model('img.comment')), 15000);
    opt_comment = Math.floor((Math.random() * comments.count()) + 1);
    element(by.model('img.comment')).sendKeys(comments[opt_comment]);

    browser.wait(EC.elementToBeSelected(by.css('ng-click="doNext()"')), 15000);
    element(by.css('ng-click="doNext()"')).click();
  });
  it('answering question 4 randomly', function() {

    var EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeSelected(by.model('ngModel')), 15000);
    var num_data = Math.floor((Math.random() * 20 + 1);
    element(by.model('ngModel')).sendKeys(num_data);

    var comments = ["Saab", "Volvo", "BMW","hello world", "comment 1", "new comment", "this is protractor!", "from protractor", "watching tv", "so cold", "the babysitter", "reading books"];
    var pics = ["pic-1.png", "pic-2.png", "pic-3.png", "pic-4.png", "pic-5.png", "pic-6.png"]
    var opt_comment = Math.floor((Math.random() * comments.count()) + 1);
    var opt_pic = Math.floor((Math.random() * pics.count()) + 1);
    var filepath = "/home/mycomputer/ryan/pics/";
    element(by.xpath('//textarea')).sendKeys(comments[opt_comment]);
    element(by.xpath('//input[@capture="camera" and @type="file"]')).sendKeys(filepath + pics[opt_pic]);

    browser.wait(EC.elementToBeSelected($('figure.i-edit')), 15000);
    element($('figure.i-edit')).click();

    browser.wait(EC.elementToBeSelected(by.model('img.comment')), 15000);
    opt_comment = Math.floor((Math.random() * comments.count()) + 1);
    element(by.model('img.comment')).sendKeys(comments[opt_comment]);

    browser.wait(EC.elementToBeSelected(by.css('ng-click="doNext()"')), 15000);
    element(by.css('ng-click="doNext()"')).click();
  });
  it('generating a pdf report', function() {

    var EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeSelected(by.id('mark-as-done')), 15000);
    element(by.id('mark-as-done')).click();

    browser.wait(EC.elementToBeSelected(by.id('confirm-modal')), 15000);
    element(by.id('confirm-modal')).click();

    browser.wait(EC.elementToBeSelected(by.id('create-report')), 15000);
    element(by.id('create-report')).click();

    browser.wait(EC.elementToBeSelected(by.id('download')), 15000);
    element(by.id('download')).click();

    browser.wait(EC.elementToBeSelected($('div.endOfContent')), 15000);
    var tab_1 = browser.getWindowHandle();
    var response = browser.getTitle();
    if ((response.includes("Color")) && (response.includes("Automated"))){
      browser.switchTo().window(tab_1);
    }
  });  
  it('check if DONE count increased and then logout', function() {

    var EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeSelected($('div.hamburger-button.i-hamburger')), 15000);
    element($('div.hamburger-button.i-hamburger')).click();

    browser.wait(EC.elementToBeSelected(by.css('ng-click="def()"')), 15000);
    element(by.css('ng-click="def()"')).click();
    var done_init = element(by.xpath('//h6[contains(.,"DONE")]/preceding-sibling::h1')).getText();
    browser.sleep(5000);
    var done_inc = element(by.xpath('//h6[contains(.,"DONE")]/preceding-sibling::h1')).getText();

    if (done_inc > done_init){
      browser.wait(EC.elementToBeSelected($('div.hamburger-button.i-hamburger')), 15000);
      element($('div.hamburger-button.i-hamburger')).click();

      browser.wait(EC.elementToBeSelected(by.css('ng-click="logout()"')), 15000);
      element(by.css('ng-click="logout()"')).click();
    }    
  });
});