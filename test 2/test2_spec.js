describe('test 2', function() {
  it('go to youtube and click the first video', function() {
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
    browser.get('https://www.youtube.com', 15000);

    var first_vid = element(by.xpath('//*[@id="title-container" and contains(.,"Trending")]/parent::div/following-sibling::div//*[@id="items"]/ytd-grid-video-renderer[1]//a[@id="thumbnail"]'));
    first_vid.click();
  });
  it('click the first video under UP NEXT', function() {

    var EC = protractor.ExpectedConditions;
    var elem1 = element(by.xpath('//div[@id="upnext" and contains(.,"Up next")]/parent::div/following-sibling::div'));
    browser.wait(EC.presenceOf(elem1), 15000, 'Element taking too long to appear in the DOM');
    elem1.click();  
  });
  it('go back to youtube and verify', function() {

    var EC = protractor.ExpectedConditions;
    var elem2 = element(by.xpath('//*[@id="logo"]//*[@id="logo" and @title="YouTube Home"]'));
    browser.wait(EC.presenceOf(elem2), 15000, 'Element taking too long to appear in the DOM');
    elem2.click();
    
    browser.wait(EC.titleIs('YouTube'), 15000);
    browser.wait(EC.urlContains('youtube'), 15000);

    expect(browser.getTitle()).toEqual('YouTube');
    expect(browser.getCurrentUrl()).toEqual('https://www.youtube.com/');
  });
});