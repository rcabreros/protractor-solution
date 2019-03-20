describe('test 1', () => {

  beforeAll(() => {

    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
    browser.get('https://www.google.com', 15000);
  
  });

  var google_home = require('./page/google_home.js');

  it('from google to youtube', () => {    
    
    google_home.clickGApps();
    //google_home.selectYoutube();
    var youtube_home = google_home.selectYoutube();
    
    youtube_home.getTitle().then((text) => {
    	expect(text).toEqual('YouTube');
    });

    expect(browser.getCurrentUrl()).toContain('www.youtube.com');

  });
});