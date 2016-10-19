/// <reference path="~/GeneratedArtifacts/viewModel.js" />

// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".


myapp.Setup.desc_postRender = function (element, contentItem) {

    var help = $("<h2>Initial Setup</h2><div>Click the button below to add the following status types to your application </div><ul><li>Open</li><li>Closed</li></ul>");
    $(element).prepend(help);
};

myapp.Setup.CreateRecords_execute = function (screen) {
    // Listing 6-1. Code to add new records
    var statusOpen =
        myapp.activeDataWorkspace.ApplicationData.IssueStatusSet.addNew();     
    statusOpen.StatusDescription = "Open (new)";                                     

    var statusClosed =
        myapp.activeDataWorkspace.ApplicationData.IssueStatusSet.addNew();
    statusClosed.StatusDescription = "Closed (new)";

    //return myapp.activeDataWorkspace.ApplicationData.saveChanges();           

};


//'Listing 6-2. Updating records with code'
myapp.Setup.CloseOldIssues_execute = function (screen) {
    
    return   screen.getIssueStatusClosed().then(                                                                                                  
       function() {
           screen.getIssuesForLastYear().then(                                                                                           
               function() {
                   for(var i = 0; i < screen.IssuesForLastYear.count; i++) {
                       var issCurrent = screen.IssuesForLastYear.data[i];
                       issCurrent.IssueStatus = 
                          screen.IssueStatusClosed;      


                   }
                 //  return screen.saveChanges();        
                    
               }
           )
           })
    };


//Listing 6-3. Code to delete records
myapp.Setup.DeleteIssues_execute = function (screen) {
    return screen.getIssuesForLastYear().then(
             function() {
                 for(var i = 0; i < screen.IssuesForLastYear.count; i++) {                                     
                     var issCurrent = screen.IssuesForLastYear.data[i];
                     issCurrent.deleteEntity();                                                                
                 }
                 //return screen.saveChanges();        
             }
        )

};