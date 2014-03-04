;(function() {
	'use strict';
	if (!document.querySelectorAll) {
		document.querySelectorAll = function(selector) {
			var style = document.styleSheets[0] || document.createStyleSheet();
			style.addRule(selector, "foo:bar");
			var all = document.all, resultSet = [];
			for (var i = 0, l = all.length; i < l; i++) {
				if (all[i].currentStyle.foo === "bar") {
					resultSet[resultSet.length] = all[i];
				}
			}
			style.removeRule(0);
			return resultSet;
		};
	}
	
	(function() {
		var ss = document.querySelectorAll("script[lazy-src]");
		for (var i = 0; i < ss.length; i++) {
			ss[i].src = ss[i].getAttribute("lazy-src");
			ss[i].removeAttribute("lazy-src");
		}
	})();
});