/// <reference path="~/GeneratedArtifacts/viewModel.js" />

// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

myapp.ViewIssueDocument.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.IssueDocument.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.IssueDocument." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

//Listing 11-5. Custom control code to show a Download Document File hyperlink
myapp.ViewIssueDocument.Id_render = function (element, contentItem) {

    var root = location.protocol + '//' + location.host;                  
    var downloadURL = root +
       '/Content/DocUtils/DownloadIssueDocument.ashx?id=' +
          contentItem.value.toString();                                   

    var downloadLink = $('<div><a target="_blank" ' +                     
          'href="' + downloadURL + '" style="margin-top: 10px;" >' +
          'Download Document File</a></div>');
    downloadLink.appendTo($(element));

};

