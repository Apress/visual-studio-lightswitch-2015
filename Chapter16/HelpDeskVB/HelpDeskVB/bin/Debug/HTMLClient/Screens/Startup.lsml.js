/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.Startup.Group1_render = function (element, contentItem) {
    // Write code here.

        var title = "<h2>Chapter 16 - Apress LightSwitch 2015 - Tim Leung</h2><p>This screen shows you how to display report content on an HTML Client screen.</p>"

    //Listing 16-9. Custom control code to show report in an iframe
        var url = window.location.protocol + "//" + window.location.host +      
            "/Reports/PriorityChart.aspx?engineerid=1";

        var report = "<iframe src='" + url +
            "' style='height:400px;width:400px;border:0;'></iframe>";
        element.innerHTML = title + report;


};