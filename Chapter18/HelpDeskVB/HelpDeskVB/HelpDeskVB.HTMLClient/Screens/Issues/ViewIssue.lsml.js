/// <reference path="~/GeneratedArtifacts/viewModel.js" />

//You can use and redistribute the code from this book (and sample application) for non-commercial and 
//most commercial purposes as long as you acknowledge the source and authorship. 
//You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
//The acknowledgment should include author, title, publisher, and ISBN. 
//An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".


myapp.ViewIssue.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Issue.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Issue." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}


//Listing 18-6. Calling the SendEmail handler page via AJAX
myapp.ViewIssue.SendEmail_execute = function (screen) {

    return new msls.promiseOperation(function (operation) {                   
        //The example builds a URL that looks like this…      
        //url = "http://localhost:5245/MailService.svc/SendMailREST";      
        var url = window.location.protocol + "//" + window.location.host +    
            "/MailService.svc/SendMailREST";

        var email = new Object;                                               
        email.emailTo = screen.Recipient;
        email.subject = "Issue details";
        email.body = screen.Issue.ProblemDescription;

        var jsonData = JSON.stringify(email);                                 

        $.ajax({
            type: 'POST',
            data: jsonData,
            dataType: "json",
            contentType: 'application/json',
            url: url,
            success: function success(result) {                               
                operation.complete();
                msls.showMessageBox(result.SendMailRESTResult);
            },
            error: function err(jqXHR, textStatus, errorThrown) {             
                operation.error(errorThrown);
            }
        });
    });
};
