/// <reference path="~/GeneratedArtifacts/viewModel.js" />

// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

myapp.AddEditIssue.created = function (screen) {

    //Listing 8-1. Setting Default Values
    if (!screen.Issue.Id) {
        screen.Issue.CreateDateTime = new Date();
    }

    //Listing 8-2. Setting the screen title
    if (!screen.Issue.Id) {                                             
        screen.details.displayName = "New Issue";                       
        screen.findContentItem("ClosureDetails").isVisible = false; 
    } else{
        screen.details.displayName = screen.Issue.Subject;              
    }


    //Listing 8-3. Adding text to a screen
    screen.screenHeading = "(*) indicates required field";              

    //Screen Validation Code    
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


//Listing 8-23. Hiding items on mobile devices
myapp.AddEditIssue.columns_postRender = function (element, contentItem) {

    var helpText = $("<div>" +              
        " This help text won't appear on mobile devices.</div>");
    helpText.addClass("prols-phone-hidden");                         
    helpText.prependTo($(element));
};


//Listing 8-8. Running code when data changes
myapp.AddEditIssue.Details_postRender = function (element, contentItem) {
    //Databind the createDateTime                                        
    contentItem.dataBind("screen.Issue.CreateDateTime", function () {
        setTargetEndDate(contentItem);
    });

    function setTargetEndDate(contentItem) {

        //Only set the target date for new issues                        
        if (!contentItem.screen.Issue.Id 
           && contentItem.screen.Issue.CreateDateTime ) {
            // get the create date
            var createDate = contentItem.screen.Issue.CreateDateTime;
            var futureDate = new Date(
                  createDate.getFullYear(), 
                    createDate.getMonth(),createDate.getDate());

            // add 3 days onto the create date
            futureDate.setDate(futureDate.getDate() + 3);                
            contentItem.screen.Issue.TargetEndDateTime = futureDate;     
        }
    };
};

myapp.AddEditIssue.Group_postRender = function (element, contentItem) {
 
    var helpText = $('' +
        '<p>The features on this screen includes:</p>' +
        '<ul>' +
        '<li>Setting the screen title</li>' +
        '<li>Adding custom HTML and text to a screen</li>' +
        '<li>Setting default values</li>' +
        '<li>Showing tooltips</li>' +
        '<li>Conditionally hiding elements on smaller screens</li>' +
        '</ul>' +
        '');


    $(element).append(helpText);


};



//Listing 8-12. Modifying label data

myapp.AddEditIssue.Subject_postRender = function (element, contentItem) {
    $(element).parent().attr('title', 
       'Enter a short description here to describe the problem');
    $(element).parent().find('label')[0].innerHTML += " <span style='color:red'> *</span>"
};
