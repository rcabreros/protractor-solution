describe('test 1', function() {
  it('from google to youtube', function() {
    browser.get('https://www.google.com/');

    element(by.id('gbwa')).click();

    var until = protractor.ExpectedConditions;
    var elem = element(by.id('gb36'));
    browser.wait(until.presenceOf(elem), 5000, 'Element taking too long to appear in the DOM');
    elem.click();

    var EC = protractor.ExpectedConditions;
    browser.wait(EC.titleIs('YouTube'), 5000);
    browser.wait(EC.urlContains('youtube'), 5000);
  });
});
