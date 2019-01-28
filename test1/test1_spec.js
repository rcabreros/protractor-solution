describe('test 1', function() {

  var until = protractor.ExpectedConditions;

  beforeAll(function() {

    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
    browser.get('https://www.google.com', 15000);
  });

  it('from google to youtube', function() {    
    
    var elem1 = $('#gbwa');
    browser.wait(until.presenceOf(elem1), 15000, 'Element taking too long to appear in the DOM');
    elem1.click();

    var elem = $('#gb36');
    browser.wait(until.presenceOf(elem), 15000, 'Element taking too long to appear in the DOM');
    elem.click();
    
    browser.wait(until.titleIs('YouTube'), 15000);
    browser.wait(until.urlContains('youtube'), 15000);

    expect(browser.getTitle()).toEqual('YouTube');
    expect(browser.getCurrentUrl()).toEqual('https://www.youtube.com/?gl=PH');
  });
});