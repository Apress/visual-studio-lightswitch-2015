/// <reference path="~/GeneratedArtifacts/viewModel.js" />

// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

myapp.Startup.Group_postRender = function (element, contentItem) {
    var helpText = $('<h2>Chapter 10 - Apress LightSwitch 2015 - Tim Leung</h2>' +
        '<p>This chapter demonstrates techniques you can use to effectively search data. You can find example screens in the Desktop Client solution. </p>' +
        '<p>This application contains a search textbox in the header that appears all throughout the application. You can use this to search issue records.</p>');

    $(element).append(helpText);
};
