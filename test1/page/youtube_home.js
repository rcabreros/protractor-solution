var youtube_home = function () {
	
	this.getTitle = () => {
		return browser.getTitle();
	};

	//this.selectGApps = (GApps_css) => {
	//	element(by.css(GApps_css)).click();
	//}

};
module.exports = new youtube_home();