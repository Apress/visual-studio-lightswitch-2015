/// <reference path="~/GeneratedArtifacts/viewModel.js" />

// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

myapp.AddEditEngineer.desc_postRender = function (element, contentItem) {
    // Write code here.
    var help = $("<h2>Reviewing data on the client</h2><div>This screen shows you how to enable users to review data on the client. When you save, the screen summarizes your changes and gives you the chance to reject your changes.</div>");
    $(element).prepend(help);

};

//Listing 6-7. Discarding screen changes
myapp.AddEditEngineer.beforeApplyChanges = function (screen) {

    var propertyNames = screen.Engineer.details.getModel().properties;                               

    var engineerModified = false;

    var message = 'You\'ve made the following changes. \nClick Yes to continue, or No to discard your changes.\n (Field Name: New Value [Old Value]\n\n';

    for (var i = 0, len = propertyNames.length; i < len; ++i) {

        var propName = propertyNames[i].name;

        if (screen.Engineer.details.properties[propName].isEdited == true) {                      
            //the field here has been modified
            message = message +
                propName + ': ' +
                screen.Engineer.details.properties[propName].value +
                ' [' + screen.Engineer.details.properties[propName].originalValue +
                '] \n';                                                                             
            engineerModified = true;
        }       
    }

    if (engineerModified == true) {

        var msgOptions = {                                                                        
            title: "Review Changes",
            buttons: msls.MessageBoxButtons.yesNo,
            defaultresult: msls.MessageBoxResult.yes
        };

        msls.showMessageBox(message, msgOptions).then(
        function (result) {
            if (result == msls.MessageBoxResult.yes) {
                //save changes and navigate back
                saveAndReturn(screen);                                                                                    
            }
            if (result == msls.MessageBoxResult.no) {
                //discard changes and remain on screen
                screen.Engineer.details.discardChanges();
            }
        }
        )
        return false;                                                                                                     

    }
    else {
        //the user hasn't made any changes
        return true;
    }

    //    You can use this syntax to get all changes
    //    //screen.details.dataWorkspace.ApplicationData.details.getChanges().forEach(
    //    function (item) {
    //     item.details.  .  
    //    }
    // );

};


function saveAndReturn(screen) {                                                                                         
    
    msls.showProgress(
    screen.details.dataWorkspace.ApplicationData.saveChanges().then(
        function () {
            msls.application.navigateBack();
        })
    );
}
