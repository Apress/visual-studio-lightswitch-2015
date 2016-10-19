/// <reference path="~/GeneratedArtifacts/viewModel.js" />

// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

//Listing 11-17. Creating a screen that works only with the first record
myapp.AppOptionsEdit.created = function (screen) {

    screen.details.dataWorkspace.ApplicationData.AppOptions.top(1).execute().then(
          function (promiseObjResult) {
              if (promiseObjResult.results.length > 0) {
                  screen.AppOptionProperty = promiseObjResult.results[0];
              }
              else {
                  screen.AppOptionProperty =
               screen.details.dataWorkspace.ApplicationData.AppOptions.addNew();
              }
          }
      );
};

myapp.AppOptionsEdit.SaveAppOption_execute = function (screen) {

    return screen.details.dataWorkspace.ApplicationData.saveChanges().then(
        function () {
            msls.application.navigateBack();
        }
    );
};


myapp.AppOptionsEdit.Group_postRender = function (element, contentItem) {
    var helpText = $('<p>This screen demonstrates how to work with single row tables.</p>');
    $(element).append(helpText);
};