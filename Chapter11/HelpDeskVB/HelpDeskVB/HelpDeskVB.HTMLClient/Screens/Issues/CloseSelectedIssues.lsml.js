/// <reference path="~/GeneratedArtifacts/viewModel.js" />


// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

//Listing 11-11. Custom control code to add a checkbox and description

myapp.CloseSelectedIssues.columns_render = function (element, contentItem) {
    // Write code here.
    var chk = $("<input type='checkbox' />");
    chk.val(contentItem.value.Id);
    chk.attr('id', 'chk' + contentItem.value.Id)

    var lbl = $("<label />");
    lbl.text(contentItem.value.Subject);
    lbl.attr('for', 'chk' + contentItem.value.Id);

    chk.click(function () {

        if (this.checked) {
            checkIssue(this.value);
        } else {
            uncheckIssue(this.value);
        }
    });

    $(element).append(chk);
    $(element).append(lbl);


};


//Listing 11-13. Issue Closure screen button code

myapp.CloseSelectedIssues.CloseIssues_execute = function (screen) {
    var postdata = {
        csvData: getCheckedIssues()                                       
    };

    $.post("/Content/CloseIssues.ashx", postdata).done(function (data) {  

        msls.showMessageBox(data);
        //uncheck all checkboxes
        $("input:checkbox").prop("checked", false);
        clearCheckedIssues();
    });
};

myapp.CloseSelectedIssues.created = function (screen) {                   
    // Clear the array on load
    clearCheckedIssues();
};


myapp.CloseSelectedIssues.Group_postRender = function (element, contentItem) {

    var helpText = $("<p>This screen demonstrates how to work with multiple records. Select the required records and click the Close Selected Issues button to set the close date to today.</p>");
    $(element).append(helpText);
};
