/// <reference path="~/GeneratedArtifacts/viewModel.js" />

// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

//Listing 7-6. Validating data

myapp.AddEditIssue.created = function (screen) {

    // add a change listener to the ClosedDateTime property                   
    screen.Issue.addChangeListener("ClosedDateTime",
    function (e) {
        validateCloseDate(screen);
    });

    // add a change listener to the CreateDateTime property                 
    screen.Issue.addChangeListener("CreateDateTime",
    function (e) {
        validateCloseDate(screen);
    });

    // add a change listener to the Assigned Engineer property
    screen.Issue.addChangeListener("Engineer",
    function (e) {

        // this code runs each time Assigned Engineer changes
        var issue = screen.Issue;

        // 2 make sure assigned engineer is entered
        var contentItemEng = screen.findContentItem("Engineer");

        if (!issue.Engineer) {
            contentItemEng.validationResults = [
            new msls.ValidationResult(
            screen.Issue.details.properties.Engineer,
            "Assigned Engineer is mandatory")];
        } else {
            //clear the validation results
            contentItemEng.validationResults = null;
        }
    });

    // add a change listener to the Issue Status property
    screen.Issue.addChangeListener("IssueStatusCollection",
    function (e) {

        // this code runs each time Issue Status changes
        var issue = screen.Issue;

        // 3 make sure issue status is entered
        var contentItemIssueStatus = screen.findContentItem("IssueStatusCollection");

        if (!issue.IssueStatusCollection) {
            contentItemIssueStatus.validationResults = [
            new msls.ValidationResult(
            screen.Issue.details.properties.IssueStatusCollection,
            "Issue Status is mandatory")];
        }
        else {
            contentItemIssueStatus.validationResults = null;
        }
    });
};


function validateCloseDate(screen) {

    // this code ensures that create date is earlier than closed date 
    var issue = screen.Issue;

    var contentItemClosedDate = screen.findContentItem("ClosedDateTime");

    if (issue.CreateDateTime &&
         issue.ClosedDateTime &&
         issue.ClosedDateTime < issue.CreateDateTime) {
        contentItemClosedDate.validationResults = [
          new msls.ValidationResult(
           screen.Issue.details.properties.ClosedDateTime,
           "Closed date can't be earlier than create date")];
    }
    else {
        contentItemClosedDate.validationResults = null;
    }
}

