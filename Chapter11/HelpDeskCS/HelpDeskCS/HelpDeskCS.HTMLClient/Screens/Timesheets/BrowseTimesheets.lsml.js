/// <reference path="~/GeneratedArtifacts/viewModel.js" />

// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

myapp.BrowseTimesheets.Group_postRender = function (element, contentItem) {
    // Write code here.
    var helpText = $("<p>This screen demonstrates how to show a count of the visible records in a collection.</p>");
    $(element).append(helpText);

};

//Listing 11-19. Calculating sums 

myapp.BrowseTimesheets.rows_postRender = function (element, contentItem) {
    contentItem.dataBind("value.DurationMins", function (a) {

        var sum;
        sum = 0;
        contentItem.screen.Timesheets.data.forEach(function (a) {
            sum += a.DurationMins
        })

        contentItem.screen.TotalMinutes = sum;

    })


};