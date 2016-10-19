/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditEngineer.UserProfile_render = function (element, contentItem) {
    // Write code here.


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



    ////dispose
    //contentItem.handleViewDispose(function () {
    //    // dispose logic goes here
    //    for (k in CKEDITOR.instances) {
    //        var instance = CKEDITOR.instances[k];
    //        instance.destroy(true)
    //    }
    //});


    


};