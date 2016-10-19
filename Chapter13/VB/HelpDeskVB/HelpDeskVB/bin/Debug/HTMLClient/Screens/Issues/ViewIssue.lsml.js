/// <reference path="~/GeneratedArtifacts/viewModel.js" />

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