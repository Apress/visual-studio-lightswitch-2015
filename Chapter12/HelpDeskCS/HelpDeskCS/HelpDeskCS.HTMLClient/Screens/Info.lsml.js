/// <reference path="~/GeneratedArtifacts/viewModel.js" />

// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

myapp.Info.Group_postRender = function (element, contentItem) {
    // Write code here.
    var helpText = $("<h2>Chapter 12 - Apress LightSwitch 2015 - Tim Leung</h2>" +
        "<p>This application includes English and Spanish translations and demonstrates techniques you can use to localize an application.</p>" +
        "<p>* Change your browser language to Spanish. Run the application to see the table property appear in Spanish (Note that this text is not localized).</p>")
    $(element).append(helpText);

};