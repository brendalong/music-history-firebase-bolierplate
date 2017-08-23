
"use strict";


let firebase = require("firebase/app"),
    fb = require("./fb-getter"),
    fbData = fb();

require("firebase/auth");
require("firebase/database");

var config = {
  apiKey: fbData.apiKey,
  authDomain: fbData.authDomain,
  databaseURL: fbData.databaseURL
};


firebase.initializeApp(config);

firebase.getFBsettings = () => {
	console.log("getFBsettings", config);
	return config;
};

module.exports = firebase;



// "use strict";

// let firebase = require("firebase/app"),
//     fb = require("./fb-getter"),
//     fbData = fb();

// require("firebase/auth");
// require("firebase/database");

// var config = {
//   apiKey: fbData.apiKey,
//   authDomain: fbData.authDomain,
//   databaseURL: fbData.databaseURL
// };


// firebase.getFBsettings = function(){
//	 console.log("getFBsettings", config);
//	 return config;
// };

// // firebase.initializeApp(config);
// module.exports = firebase;

