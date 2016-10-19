/// <reference path="~/GeneratedArtifacts/viewModel.js" />


//Listing 6-1. Code to add new records
myapp.SystemSetup.CreateRecords_execute = function (screen) {

    var statusOpen =
        myapp.activeDataWorkspace.ApplicationData.IssueStatusSet.addNew();  // 
    statusOpen.StatusDescription = "Open";                            // 

    var statusClosed =
        myapp.activeDataWorkspace.ApplicationData.IssueStatusSet.addNew();
    statusClosed.StatusDescription = "Closed";

    return myapp.activeDataWorkspace.ApplicationData.saveChanges(); // 

};

//Listing 6-2. Updating records with code
myapp.SystemSetup.CloseOldIssues_execute = function (screen) {

    return screen.getIssueStatusClosed().then(                                 // 
    function() {
        screen.getIssuesForLastYear().then(                              //
            function() {
                for(var i = 0; i < screen.IssuesForLastYear.count; i++) {
                    var issCurrent = screen.IssuesForLastYear.data[i];
                    issCurrent.IssueStatus = screen.IssueStatusClosed;      
                }
                return screen.saveChanges();        
            }
        )
    }
)



};