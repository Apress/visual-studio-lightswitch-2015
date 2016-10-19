/// <reference path="~/GeneratedArtifacts/viewModel.js" />

// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

myapp.ViewDepartment.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Department.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Department." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

myapp.ViewDepartment.Group_postRender = function (element, contentItem) {
    var helpText = $('' +
        '<p>This screen shows how to format numbers with the numeraljs library. This screen applies a custom number format to the floor space property. Notice how the screen formats the value with thousand comma separators.</p>' +
        '');
    $(element).append(helpText);
};

//Listing 8-7. Formatting numbers 
myapp.ViewDepartment.FloorSpace_postRender = function (element, contentItem) {
    contentItem.dataBind("value", function (value) {
        if (value) {
            $(element).text(numeral(value).format('0,0'));
            //This is the syntax to format numbers to 2 decimal places
            //$(element).text(numeral(value).format('0.00'));
        }
    });

};