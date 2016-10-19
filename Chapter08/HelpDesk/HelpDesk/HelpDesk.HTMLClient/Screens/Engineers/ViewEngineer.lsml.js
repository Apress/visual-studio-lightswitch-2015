/// <reference path="~/GeneratedArtifacts/viewModel.js" />

// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

myapp.ViewEngineer.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Engineer.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Engineer." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

myapp.ViewEngineer.MailMethod_postRender = function (element, contentItem) {
    // Write code here.
    $(element).addClass("prols-mail-icon");
};
myapp.ViewEngineer.Group_postRender = function (element, contentItem) {

    var helpText = $('' +
        '<p>This screen demonstrates how to add a apply a custom icon to a button</p>' +
        '');

    $(element).append(helpText);

};

myapp.ViewEngineer.UserProfile_postRender = function (element, contentItem) {
    element.innerHTML = contentItem.value
};

myapp.ViewEngineer.MailMethod_execute = function (screen) {
    // Write code here.
    msls.showMessageBox('The is an example of a custom button icon.')
};