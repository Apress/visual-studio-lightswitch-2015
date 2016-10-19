/// <reference path="~/GeneratedArtifacts/viewModel.js" />

// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

myapp.BrowseEngineersTables.Group_postRender = function (element, contentItem) {
    var help = $("<strong>This is the style that all tables in the application apply.</strong>");
    $(element).prepend(help);
};

myapp.BrowseEngineersTables.Group1_postRender = function (element, contentItem) {
    var help = $("<strong>This is a style that applies to a specific table.</strong>");
    $(element).prepend(help);
};

//Listing 8-18. Setting alternate row colors to all tables in an application
myapp.BrowseEngineersTables.Engineers1_postRender = function (element, contentItem) {
    $(element).first('table').addClass('prols-table');

    $(element).find('th').each(function (value) {                                                                        
        $(this).addClass('prols-table-header');
    });




};
