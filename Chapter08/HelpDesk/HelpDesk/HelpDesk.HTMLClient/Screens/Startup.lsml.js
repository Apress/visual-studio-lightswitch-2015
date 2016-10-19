/// <reference path="~/GeneratedArtifacts/viewModel.js" />

// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

myapp.Startup.Group_postRender = function (element, contentItem) {

    var helpText = $('<h2>Chapter 8 - Apress LightSwitch 2015 - Tim Leung</h2>' +
    '<p>This chapter shows you how to customize HTML Client applications with JavaScript and CSS code.</p>' +
    '<p>This application features the black theme. Notice how the tables and lists feature alternating colors. Also, notice how the buttons are left aligned in the footer.</p>' +
    '<p>Other techniques that this chapter covers includes:</p>' +
    '<ul>' +
    '<li>Applying custom controls                  </li>' +
    '<li>Formatting dates and numbers              </li>' +
    '<li>Applying different colors/fonts           </li>' +
    '<li>Using popups                              </li>' +
    '<li>Running code when data changes            </li>' +
    '<li>Deleting records                          </li>' +
    '<li>Hiding elements on smaller screens        </li>' +
    '<li>Showing custom text/HTML on screens       </li>' +
    '</ul>' +
    '<p><a href="defaultCustom.htm" target="_blank">Click here</a> to see an example of how to customize the header.</p>' +
    '');

    $(element).append(helpText);

};