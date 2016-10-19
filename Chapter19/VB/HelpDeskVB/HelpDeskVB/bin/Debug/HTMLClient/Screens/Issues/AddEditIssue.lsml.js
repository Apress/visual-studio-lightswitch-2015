/// <reference path="~/GeneratedArtifacts/viewModel.js" />

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
    screen.Issue.addChangeListener("AssignedEngineer",
    function (e) {

        // this code runs each time Assigned Engineer changes
        var issue = screen.Issue;

        // 2 make sure assigned engineer is entered
        var contentItemEng = screen.findContentItem("AssignedEngineer");

        if (!issue.AssignedEngineer) {
            contentItemEng.validationResults = [
            new msls.ValidationResult(
            screen.Issue.details.properties.AssignedEngineer,
            "Assigned Engineer is mandatory")];
        } else {
            //clear the validation results
            contentItemEng.validationResults = null;
        }
    });

    // add a change listener to the Issue Status property
    screen.Issue.addChangeListener("IssueStatus",
    function (e) {

        // this code runs each time Issue Status changes
        var issue = screen.Issue;

        // 3 make sure issue status is entered
        var contentItemIssueStatus = screen.findContentItem("IssueStatus");

        if (!issue.IssueStatus) {
            contentItemIssueStatus.validationResults = [
            new msls.ValidationResult(
            screen.Issue.details.properties.IssueStatus,
            "Issue Status is mandatory")];
        }
        else {
            contentItemIssueStatus.validationResults = null;
        }
    });





    //Listing 8-5. Using Popups to prompt for user confirmations
    screen.PopupTitle = "Confirm Delete";
    screen.PopupText = "Are you sure you want to delete this record?";


    //Listing 8-1. Setting Default Values
    if (!screen.Issue.Id) {                                                                              
        screen.Issue.CreateDateTime = new Date();                                     
    }

    

};

// From Validating Data Section
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

//Listing 8-5. Using Popups to prompt for user confirmations
myapp.AddEditIssue.DoDelete_execute = function (screen) {
    // Write code here.
    screen.Issue.deleteEntity();




    //myapp.applyChanges();
    //myapp.navigateBack();

    myapp.commitChanges();

};
myapp.AddEditIssue.CancelPopup_execute = function (screen) {
    // Write code here.
    screen.closePopup();
};


//Listing 8-23. Hiding items on mobile devices
myapp.AddEditIssue.columns_postRender = function (element, contentItem) {

    var helpText = $("<div>" +              
        " This help text won't appear on mobile devices.</div>");
    helpText.addClass("prols-phone-hidden");                         
    helpText.prependTo($(element));
};