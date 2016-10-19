/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewPriority.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Priority.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Priority." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

