/// <reference path="~/GeneratedArtifacts/viewModel.js" />

// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

myapp.EngineersCustomControls.Group_postRender = function (element, contentItem) {

    var helpText = $('' +
        '<p>This screen illustrates how to format a date with the momentJS library. </p>' +
        '<p>View an engineer record to see further examples. </p>' +
        '');

    $(element).append(helpText);

};

//Listing 8-6. Formatting dates with momentjs
myapp.EngineersCustomControls.DateOfBirth_postRender = function (element, contentItem) {
    contentItem.dataBind("value", function (value) {
        if (value) {
            $(element).text(moment(value).format("dddd Do MMM YYYY"));
        }
    });

};