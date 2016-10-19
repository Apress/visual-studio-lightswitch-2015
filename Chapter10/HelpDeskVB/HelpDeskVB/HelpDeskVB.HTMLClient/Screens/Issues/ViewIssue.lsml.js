/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewIssue.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Issue.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Issue." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

