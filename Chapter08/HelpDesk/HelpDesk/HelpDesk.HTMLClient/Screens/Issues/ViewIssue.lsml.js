/// <reference path="~/GeneratedArtifacts/viewModel.js" />

// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".


myapp.ViewIssue.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Issue.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Issue." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}


myapp.ViewIssue.DoDelete_execute = function (screen) {
    // Write code here.
    screen.Issue.deleteEntity();
    return myapp.commitChanges();
};

myapp.ViewIssue.created = function (screen) {

    screen.PopupTitle = "Confirm Delete";
    screen.PopupText = "Are you sure you want to delete this record?";



};
myapp.ViewIssue.CancelPopup_execute = function (screen) {

    screen.closePopup();
};
myapp.ViewIssue.Group_postRender = function (element, contentItem) {

    var helpText = $('' +
    '<p>The delete button on this screen illustrates  the use of popups. This screen also illustrates how to apply a red color to the target end date field when an issue is overdue.</p>' +
    '');
    $(element).append(helpText);


};
myapp.ViewIssue.TargetEndDateTime_postRender = function (element, contentItem) {

    var today = new Date();

    if (contentItem.value > today) {

        //Listing 8-11. Applying custom fonts and colors 
        $(element).css({
            "background-color": "red",
            color: "white",
        });

    }

};