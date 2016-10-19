/// <reference path="~/GeneratedArtifacts/viewModel.js" />

// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

myapp.BrowseEngineersListView.Group2_postRender = function (element, contentItem) {
    // Write code here.
    var help = $("<strong>This is the style that applies to all lists and tile lists in your application.</strong>");
    $(element).prepend(help);
};

myapp.BrowseEngineersListView.Group3_postRender = function (element, contentItem) {
    // Write code here.
    var help = $("<strong>This is the style that applies to specific lists and tile lists in your application.</strong>");
    $(element).prepend(help);

};

//Listing 8-20. Applying alternate colors to a specific list or tile list control

myapp.BrowseEngineersListView.Engineers2_postRender = function (element, contentItem) {
    // specific TILE LIST style
    $(element).first('ul').addClass('prols-list');
};
myapp.BrowseEngineersListView.Engineers3_postRender = function (element, contentItem) {
    // specific LIST style
    $(element).first('ul').addClass('prols-list');
};