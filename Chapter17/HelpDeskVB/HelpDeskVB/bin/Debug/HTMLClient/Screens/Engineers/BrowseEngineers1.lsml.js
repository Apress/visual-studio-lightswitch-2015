/// <reference path="~/GeneratedArtifacts/viewModel.js" />


myapp.BrowseEngineers1.Group_postRender = function (element, contentItem) {
    var help = $("<strong>This is the style that all tables in the application apply.</strong>");
    $(element).prepend(help);
};

myapp.BrowseEngineers1.Group1_postRender = function (element, contentItem) {
    var help = $("<strong>This is a style that applies to a specific table.</strong>");
    $(element).prepend(help);
};

//Listing 8-18. Setting alternate row colors to all tables in an application
myapp.BrowseEngineers1.Engineers1_postRender = function (element, contentItem) {
    $(element).first('table').addClass('prols-table');

    $(element).find('th').each(function (value) {                                                                        
        $(this).addClass('prols-table-header');
    });




};
