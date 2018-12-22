describe('test 2', function() {
  it('go to youtube and click the first video', function() {
    browser.get('https://www.youtube.com/');

    var first_vid = element(by.xpath('//*[@id="title-container" and contains(.,"Trending")]/parent::div/following-sibling::div//*[@id="items"]/ytd-grid-video-renderer[1]//a[@id="thumbnail"]'));
    first_vid.click();
  });
  it('click the first video under UP NEXT', function() {    
    
    var EC = protractor.ExpectedConditions;
    // Waits for the element with id 'myCheckbox' to be selected.
    browser.wait(EC.elementToBeSelected($('#items')), 5000);
    element(by.xpath('//*[@id="items"]/ytd-compact-autoplay-renderer//a[@id="thumbnail"]')).click();    
  });
  it('go back to youtube and verify', function() {

    element(by.id('logo-icon-container')).click();
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.titleIs('YouTube'), 15000);
    browser.wait(EC.urlContains('youtube'), 15000);

    expect(browser.getTitle()).toEqual('YouTube');
    expect(browser.getCurrentUrl()).toEqual('https://www.youtube.com/?gl=PH');
  });
});