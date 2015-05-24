// Import the page-mod API
var pageMod = require("sdk/page-mod");
// Import the self API
var self = require("sdk/self");
 
// Build button and panel
var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var self = require("sdk/self");

var button = ToggleButton({
  id: "my-button",
  label: "my button",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onChange: handleChange
});

var panel = panels.Panel({
  contentURL: self.data.url("panel.html"),
  onHide: handleHide
});

function handleChange(state) {
  if (state.checked) {
    panel.show({
      position: button
    });
  }
}

function handleHide() {
  button.state('window', {checked: false});
}

// function firstChange(state) {
//   pageMod.PageMod({
//     include: "*.github.com",
//     contentScriptFile: [self.data.url("jquery-2.1.4.min.js"), self.data.url("jquery.safeReplace.js"), self.data.url("my-script.js")],
//     contentStyleFile: self.data.url("inject.css"),
//     contentScript: 'window.location.reload(true);'
//   });
// }


//Create a page mod
pageMod.PageMod({
  include: "*.github.com",
  contentScriptFile: [self.data.url("jquery-2.1.4.min.js"), self.data.url("jquery.safeReplace.js"), self.data.url("my-script.js")],
  contentStyleFile: self.data.url("inject.css")
});
