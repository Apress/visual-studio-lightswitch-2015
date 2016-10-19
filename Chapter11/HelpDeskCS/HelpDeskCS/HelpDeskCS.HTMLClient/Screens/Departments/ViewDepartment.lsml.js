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
    var helpText = $('<p>This screen demonstrates how to add a Google Map to an application.</p>');
    $(element).append(helpText);
};


//Listing 11-18. Adding a Google map

myapp.ViewDepartment.Department_render = function (element, contentItem) {

    var mapCanvas =
         "<div id='map-canvas' style='height:400px;width:400px;'></div>";
    element.innerHTML = mapCanvas;

    $('#map-canvas').ready(function () {
        var mapCanvas = document.getElementById('map-canvas');

        var latitude = contentItem.value.Latitude;
        var longitude = contentItem.value.Longitude;

        var mapOptions = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        var map = new google.maps.Map(mapCanvas, mapOptions);
    });

};

