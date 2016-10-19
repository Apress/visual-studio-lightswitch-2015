/// <reference path="~/GeneratedArtifacts/viewModel.js" />

// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

//Listing 8-10. Adding the CKEditor control
myapp.AddEditEngineer.UserProfile_render = function (element, contentItem) {

    //1 - Initialize the control
    var controlName = 'userProfile';
    var $element = $(element);
    var $ckTextarea = $('<textarea name="' + controlName + '" data-role="none"/>');
    $element.append($ckTextarea);                                                                            

    for (k in CKEDITOR.instances) {
        var instance = CKEDITOR.instances[k];
        instance.destroy(true)
    }

    

    CKEDITOR.replace(controlName).setData(contentItem.value);                         

    ////2 - Update the model when the user changes the data
    CKEDITOR.instances[controlName].on('blur', function () {
        if (contentItem.value != CKEDITOR.instances[controlName].getData()) {
            contentItem.value = CKEDITOR.instances[controlName].getData();            
        }
    });

    //3 - Update the editor value when the model changes
    contentItem.dataBind("stringValue", function (newValue) {                         
        $ckTextarea.val(newValue);
    });  


};
myapp.AddEditEngineer.Group1_postRender = function (element, contentItem) {


    var helpText = $('' +
        '<p>This screen shows you how to add a custom HTML editor control to a screen. Click the User Profile tab to see the control.</p>' +
        '');


    $(element).append(helpText);


};