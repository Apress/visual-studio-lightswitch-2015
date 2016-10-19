/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.Setup.desc_postRender = function (element, contentItem) {

    var help = $("<h2>Initial Setup</h2><div>Click the button below to add the following status types to your application </div><ul><li>Open</li><li>Closed</li></ul>");
    $(element).prepend(help);
};

myapp.Setup.CreateRecords_execute = function (screen) {
    // Listing 6-1. Code to add new records
    var statusOpen =
        myapp.activeDataWorkspace.ApplicationData.IssueStatusSet.addNew();     
    statusOpen.StatusDescription = "Open";                                     

    var statusClosed =
        myapp.activeDataWorkspace.ApplicationData.IssueStatusSet.addNew();
    statusClosed.StatusDescription = "Closed";

    return myapp.activeDataWorkspace.ApplicationData.saveChanges();           

};


//'Listing 6-2. Updating records with code'
myapp.Setup.CloseOldIssues_execute = function (screen) {
    
    return 
    screen.getIssueStatusClosed().then(                                                                                                  
       function() {
           screen.getIssuesForLastYear().then(                                                                                           
               function() {
                   for(var i = 0; i < screen.IssuesForLastYear.count; i++) {
                       var issCurrent = screen.IssuesForLastYear.data[i];
                       issCurrent.IssueStatus = 
                          screen.IssueStatusClosed;      
                   }
                   return screen.saveChanges();        
               }
           )
           })
    };