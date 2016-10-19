/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.BrowseEngineers2.Group2_postRender = function (element, contentItem) {
    // Write code here.
    var help = $("<strong>This is the style that applies to all lists and tile lists in your application.</strong>");
    $(element).prepend(help);
};

myapp.BrowseEngineers2.Group3_postRender = function (element, contentItem) {
    // Write code here.
    var help = $("<strong>This is the style that applies to specific lists and tile lists in your application.</strong>");
    $(element).prepend(help);

};

myapp.BrowseEngineers2.Engineers2_postRender = function (element, contentItem) {
    // specific TILE LIST style
    $(element).first('ul').addClass('prols-list');
};
myapp.BrowseEngineers2.Engineers3_postRender = function (element, contentItem) {
    // specific LIST style
    $(element).first('ul').addClass('prols-list');
};