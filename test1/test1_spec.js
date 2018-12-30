describe('test 1', function() {
  it('from google to youtube', function() {
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
    browser.get('https://www.google.com', 15000);

    var EC = protractor.ExpectedConditions;
    var elem1 = $('a.gb_b.gb_qc');
    //browser.wait(EC.elementToBeSelected(elem1), 15000, 'Element taking too long to appear in the DOM');
    elem1.click();


    var until = protractor.ExpectedConditions;
    var elem = element(by.id('gb36'));
    browser.wait(until.presenceOf(elem), 15000, 'Element taking too long to appear in the DOM');
    elem.click();
    
    browser.wait(EC.titleIs('YouTube'), 15000);
    browser.wait(EC.urlContains('youtube'), 15000);

    expect(browser.getTitle()).toEqual('YouTube');
    expect(browser.getCurrentUrl()).toEqual('https://www.youtube.com/?gl=PH');
  });
});