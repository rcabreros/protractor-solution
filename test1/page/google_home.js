var google_home = function () {

	//let until = protractor.ExpectedConditions;
	
	this.clickGApps = () => {
		element(by.css('#gbwa')).click();
	};

	this.selectYoutube = () => {
		//browser.wait(until.presenceOf(element(by.css('#gb36'))), 5000, 'Element did not appear after waiting for 5s!!');
		element(by.css('#gb36')).click();
		return require('./youtube_home.js');
	};

};
module.exports = new google_home();