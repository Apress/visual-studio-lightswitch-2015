/// <reference path="~/GeneratedArtifacts/viewModel.js" />

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