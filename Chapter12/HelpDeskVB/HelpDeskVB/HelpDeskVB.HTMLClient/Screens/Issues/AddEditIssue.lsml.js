/// <reference path="~/GeneratedArtifacts/viewModel.js" />

// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

myapp.AddEditIssue.Group_postRender = function (element, contentItem) {
    // Write code here.
    var helpText = $("" +
        "<p>* Set the closed date to a value greater than the create date. When in Spanish, the validation warning will appear in Spanish.</p>" +
        "<p>* When in Spanish, the mandatory field message will appear in Spanish.</p>")
    $(element).append(helpText);

};

myapp.AddEditIssue.created = function (screen) {
    // Listing 12-3.Retrieving localized values from JavaScript code 
    screen.screenHeading =    WinJS.Resources.getString("/client/ValidationRequiredField").value;
};