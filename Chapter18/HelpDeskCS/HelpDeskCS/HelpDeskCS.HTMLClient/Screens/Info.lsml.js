/// <reference path="~/GeneratedArtifacts/viewModel.js" />

//You can use and redistribute the code from this book (and sample application) for non-commercial and 
//most commercial purposes as long as you acknowledge the source and authorship. 
//You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
//The acknowledgment should include author, title, publisher, and ISBN. 
//An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".



myapp.Info.Group_postRender = function (element, contentItem) {
    // Write code here.
    var helpText = $("<h2>Chapter 18 - Apress LightSwitch 2015 - Tim Leung</h2>" +
        "<p>This chapter shows how to send emails. Open the browse issue screen to see an example.</p>" +
        "<ul>" +
        "<li>From the browse issue screen, open an issue record. From the view screen, select the email tab to forward the issue details to a recipient.</li>" +
        "<li>Edit an issue record and set the status to closed. This will send an automatic email notification.</li>" +
        "</ul>");
    $(element).append(helpText);

};