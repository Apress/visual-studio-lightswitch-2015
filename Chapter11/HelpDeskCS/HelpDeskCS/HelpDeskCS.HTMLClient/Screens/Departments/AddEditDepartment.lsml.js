/// <reference path="~/GeneratedArtifacts/viewModel.js" />

// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

myapp.AddEditDepartment.Group_postRender = function (element, contentItem) {
    var helpText = $('<p>This screen demonstrates how to use GPS to return the current location.</p>' +
        '<p>It\'s best to use Google Chrome for this.</p>');
    $(element).append(helpText);
};

//Listing 11-17. Picking up the GPS location
myapp.AddEditDepartment.GetLocation_execute = function (screen) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (pos) {
            screen.Department.Latitude = pos.coords.latitude.toString();
            screen.Department.Longitude = pos.coords.longitude.toString();
        },
        function (err) {
            msls.showMessageBox("Error - Unable to determine location");
        },
        { maximumAge: 60000, timeout: 2000 });
    }
    else {
        msls.showMessageBox("Error - Geolocation not supported ");
    }
};
