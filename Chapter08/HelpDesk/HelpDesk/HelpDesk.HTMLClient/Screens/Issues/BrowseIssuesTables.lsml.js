/// <reference path="~/GeneratedArtifacts/viewModel.js" />

// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

//Listing 8-21. Applying conditional formatting  to a table cell
myapp.BrowseIssuesTables.TargetEndDateTime2_postRender = function (element, contentItem) {
    // Write code here.
    var today = new Date();
    if (contentItem.value && (today > contentItem.value)) {
        $(element).closest('td').addClass('prols-alert-text');

        // Replace the above line with this code to highlight the row
        // $(element).closest("tr").css("background-color", "yellow");
    }
};


myapp.BrowseIssuesTables.Group2_postRender = function (element, contentItem) {
    var help = $("<strong>This table formats the cell in red when the target end date has lapsed</strong>");
    $(element).prepend(help);
};


//Listing 8-22. Conditionally formatting  the tile list and list controls
myapp.BrowseIssuesTables.TargetEndDateTime_postRender = function (element, contentItem) {
    // TILE LIST formatting

    var today = new Date();
    if (contentItem.value && (today > contentItem.value)) {
        $(element).parents().eq(1).addClass('prols-highlight-text');

        //alternate syntax with closest method and  hard coded CSS
        //$(element).closest('li').css('background-color', 'green');
    }
};


myapp.BrowseIssuesTables.Issues1Template_postRender = function (element, contentItem) {

    // LIST formatting
    var today = new Date();
    var targetDate = contentItem.screen.Issues.selectedItem.TargetEndDateTime;

    if (targetDate && (today > targetDate)) {
        $(element).parents().eq(0).addClass('prols-highlight-text');
    }


};

