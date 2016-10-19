/// <reference path="~/GeneratedArtifacts/viewModel.js" />

//You can use and redistribute the code from this book (and sample application) for non-commercial and 
//most commercial purposes as long as you acknowledge the source and authorship. 
//You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
//The acknowledgment should include author, title, publisher, and ISBN. 
//An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".


myapp.Startup.Group1_render = function (element, contentItem) {
 
    var title = "<h2>Chapter 16 - Apress LightSwitch 2015 - Tim Leung</h2><p>This screen shows you how to display report content on an HTML Client screen.</p>"

    //Listing 16-9. Custom control code to show report in an iframe
    var url = window.location.protocol + "//" + window.location.host +
        "/Reports/PriorityChart.aspx?engineerid=1";

    var report = "<iframe src='" + url +
        "' style='height:400px;width:400px;border:0;'></iframe>";
    element.innerHTML = title + report;

};