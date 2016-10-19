/// <reference path="~/GeneratedArtifacts/viewModel.js" />

// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".


myapp.ViewEngineer.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Engineer.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Engineer." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}


myapp.ViewEngineer.created = function (screen) {
    //Listing 6-4. Code to get data
    //var today = new Date();

    //return screen.Engineer.getIssues().then(                                                                     
    //    function (result) {

    //        var engIssues = result.where(
    //            function (item) {
    //                return (item.CreateDateTime > today)
    //            }
    //            )
    //        screen.IssueCountLabel = engIssues.array.length;
    //    }
    //    );


    //Listing 6-5. Code to execute queries remotely
    // var today = new Date.now();

    ////Generate a filter string that looks like this                                                   
    ////"AssignedEngineer/Id eq 3 and CreateDateTime gt datetime'2015-06-01T00:00:00'"

    // var filter = '';
    // filter = "AssignedEngineer/Id eq " + screen.Engineer.Id +
    //      "and CreateDateTime gt datetime'" +
    //      today.year + "-" + today.month + "-01T00:00:00'";

    //   return   
    //     screen.details.dataWorkspace.ApplicationData.Issues.filter(filter).execute().then(           
    //     function (result) {            
    //         screen.IssueCountLabel = result.results.length;
    //     }
    // );


    return screen.Engineer.getIssues().then(                                                                     
        function (result) {            
            //for brevity, return a complete count of issues
            screen.IssueCountLabel = result.array.length;
        }
        );


};
myapp.ViewEngineer.Group_postRender = function (element, contentItem) {
    var helpText = $('<p>This screen shows the code you can use to generate a count of records</p>'+
        '<p>Edit this record to see how to review changes in code.</p>');
    $(element).append(helpText);
};