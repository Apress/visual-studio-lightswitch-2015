/// <reference path="~/GeneratedArtifacts/viewModel.js" />

//You can use and redistribute the code from this book (and sample application) for non-commercial and 
//most commercial purposes as long as you acknowledge the source and authorship. 
//You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
//The acknowledgment should include author, title, publisher, and ISBN. 
//An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

//Listing 17-2. JavaScript code that creates the document 
myapp.BrowseEngineersTimesheets.DownloadTimesheet_execute = function (screen) {
    // Create a document in a new workspace
    var dataworkspace = new msls.application.DataWorkspace;
    var rpt = dataworkspace.ApplicationData.TimesheetReports.addNew();         
    rpt.EngineerId = screen.Engineers.selectedItem.Id;                         

    dataworkspace.ApplicationData.saveChanges().then(                          
        function () {
            var documentBlob = rpt.ReportData;
            // On success - open the save dialog
            window.navigator.msSaveOrOpenBlob(                                 
                base64toBlob(documentBlob), 'TimesheetReport.docx');
        }
      );

};

function base64toBlob(base64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 1024;
    var byteCharacters = atob(base64Data);                                                             
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);

    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        var begin = sliceIndex * sliceSize;
        var end = Math.min(begin + sliceSize, bytesLength);

        var bytes = new Array(end - begin);
        for (var offset = begin, i = 0 ; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
}
