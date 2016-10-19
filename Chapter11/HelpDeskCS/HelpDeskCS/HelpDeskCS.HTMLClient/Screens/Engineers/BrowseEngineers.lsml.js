/// <reference path="~/GeneratedArtifacts/viewModel.js" />

// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

myapp.BrowseEngineers.Group_postRender = function (element, contentItem) {
    var helpText = $("<p>Use this screen to open an engineer record. From the engineer edit screen, you can see how to assign and de-assign subordinate records.</p>");
    $(element).append(helpText);
};