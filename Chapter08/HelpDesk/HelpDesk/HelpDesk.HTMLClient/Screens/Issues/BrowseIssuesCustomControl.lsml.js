/// <reference path="~/GeneratedArtifacts/viewModel.js" />

// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

myapp.BrowseIssuesCustomControl.Group_postRender = function (element, contentItem) {
    var help = $("<p>This screen demonstrates the use of custom controls.</p>");
    $(element).append(help);

};

//Listing 8-9. Displaying data with a custom control
myapp.BrowseIssuesCustomControl.columns_render = function (element, contentItem) {
    //RowTemplate
    var overdueAlert = "";
    var today = new Date();                                               
    if (contentItem.value.TargetEndDateTime < today) {                    
        overdueAlert =                                                    
             "<img src='Content/Images/warning.png'" +
             " style='float:left;padding-right:10px;'/>";
    }

    var customText = $("<div>" + overdueAlert + "<p><strong>" +
        moment(contentItem.value.CreateDateTime).format('dddd Do MMM YYYY') +
       "</strong></p></br>" + contentItem.value.Subject + "</div>");

    customText.appendTo($(element));

};
