/// <reference path="~/GeneratedArtifacts/viewModel.js" />

// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

myapp.Info.Group_postRender = function (element, contentItem) {
    // Write code here.
    var helpText = $('<h2>Chapter 6 - Apress LightSwitch 2015 - Tim Leung</h2>' +
        '<p>This chapter shows you how to work with data in code. Open the Setup screen to see some JavaScript examples.</p>' +
        '<p>You can use the engineer screen to see code that retrieves data.</p>');

    $(element).append(helpText);

};